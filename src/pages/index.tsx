import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { isBasicName } from "config/validation/name";
import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import { yup } from "utils/yup";

import { DataSection, Main, CustomButton } from "../styles/home";
import { Header } from "../web/components/header";

import { HttpStatusEnum } from "enums/statuses";

const Home: NextPage = () => {
	const { isOpen, onClose: closeForm, onOpen: openForm } = useDisclosure();
	const toast = useToast({
		duration: 2500,
		containerStyle: {
			fontFamily: "Poppins",
		},
		isClosable: true,
		position: "top-right",
	});

	const validationSchema = yup.object().shape({
		name: isBasicName,
	});

	const formatValues = (values: Record<string, string>) => {
		return Object.entries(values).map(([title, answer]) => {
			return {
				title,
				answer,
			};
		});
	};

	return (
		<>
			<Header />
			<Main>
				<DataSection id="presentation">
					<h2>Uma empresa sustentável, feita para você!</h2>
					<p>
						A HortaSua tem como proposta pomover uma maior sustentabilidade,
						permitindo ao consumidor uma horta auto-regulável em sua própria
						casa ou apartamento.
					</p>
				</DataSection>
				<DataSection id="form-invite">
					<h2>Gostou do que leu? Então nos dê sua opinião!</h2>
					<p>
						Responda ao formulário abaixo para nos dizer um pouco mais sobre a
						sua experiência com a nossa empresa!
					</p>
					<CustomButton onClick={openForm}>
						Responder ao formulário
					</CustomButton>
				</DataSection>
			</Main>

			<Modal
				isOpen={isOpen}
				onClose={closeForm}
				motionPreset="slideInBottom"
				isCentered
			>
				<ModalOverlay />
				<ModalContent
					style={{
						width: "90vw",
					}}
				>
					<ModalHeader>Formulário</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Formik
							initialValues={{
								name: "",
							}}
							onSubmit={async (values, actions) => {
								const { status } = await axios.post(
									`${process.env.NEXT_PUBLIC_API_URL}/forms`,
									{
										questions: formatValues(values),
									},
								);

								if (status !== HttpStatusEnum.CREATED) {
									toast({
										title: "Ocorreu um erro",
										description: "Seu formulário não pode ser enviado.",
										status: "error",
									});

									return;
								}
								toast({
									title: "Formulário enviado",
									description: "Seu formulário foi enviado com sucesso!",
									status: "success",
								});

								actions.setSubmitting(false);
								actions.resetForm();
							}}
							validationSchema={validationSchema}
						>
							{({ isSubmitting }) => (
								<Form>
									<Field name="name">
										{({ field, form }: any) => (
											<FormControl
												isInvalid={form.errors.name && form.touched.name}
											>
												<FormLabel htmlFor="name">Nome</FormLabel>
												<Input {...field} placeholder="Nome" />
												<FormErrorMessage>{form.errors.name}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Button
										mt={4}
										mb={4}
										colorScheme="teal"
										isLoading={isSubmitting}
										type="submit"
									>
										Enviar
									</Button>
								</Form>
							)}
						</Formik>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Home;

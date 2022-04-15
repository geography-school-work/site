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
import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";

import { HomeStyles } from "../styles/home";
import { HeaderComponent } from "../web/components/header";

const Home: NextPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const toast = useToast();

	const validateField = (value: string) => {
		if (!value) {
			return "Este campo é obrigatório";
		}

		return "";
	};

	return (
		<>
			<HeaderComponent />
			<HomeStyles>
				<div id="presentation">
					<h2>Uma empresa sustentável, feita para você!</h2>
					<p>
						A HortaSua tem como proposta pomover uma maior sustentabilidade,
						permitindo ao consumidor uma horta auto-regulável em sua própria
						casa ou apartamento.
					</p>
				</div>
				<div id="form-invite">
					<h2>Gostou do que leu? Então nos dê sua opinião!</h2>
					<p>
						Responda ao formulário abaixo para nos dizer um pouco mais sobre a
						sua experiência com a nossa empresa!
					</p>
					<button onClick={onOpen}>Responder ao formulário</button>
				</div>
			</HomeStyles>

			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent width="90%">
					<ModalHeader>Formulário</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Formik
							initialValues={{
								name: "",
							}}
							onSubmit={(values, actions) => {
								toast({
									position: "top-right",
									title: "Formulário enviado",
									description: "Seu formulário foi enviado com sucesso!",
									status: "success",
									duration: 2500,
									isClosable: true,
									containerStyle: {
										fontFamily: "Poppins",
									},
								});
								actions.setSubmitting(false);
							}}
						>
							{props => (
								<Form>
									<Field mb={5} name="name" validate={validateField}>
										{(
											{ field, form }: any, // eslint-disable-line @typescript-eslint/no-explicit-any
										) => (
											<FormControl
												isInvalid={form.errors.name && form.touched.name}
												isRequired
											>
												<FormLabel htmlFor="name">Nome</FormLabel>
												<Input {...field} placeholder="Digite seu nome" />
												<FormErrorMessage>{form.errors.name}</FormErrorMessage>
											</FormControl>
										)}
									</Field>
									<Button
										mt={4}
										mb={4}
										colorScheme="teal"
										isLoading={props.isSubmitting}
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

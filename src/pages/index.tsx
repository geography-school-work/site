import type { NextPage } from "next";
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
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	propNames,
	useDisclosure,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { HeaderComponent } from "../web/components/header";
import { HomeStyles } from "../styles/home";

const Home: NextPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const validateField = (value) => {
		if (!value) {
			return "This field is required";
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
							initialValues={{}}
							onSubmit={(values, action) => {
								console.log(values);
							}}
						>
							{(props) => (
								<Form>
									<Field mb={5} name="Alguma coisa">
										{({ field, form }) => (
											<FormControl
												isInvalid={form.errors.name && form.touched.name}
											>
												<FormLabel htmlFor="Alguma coisa">Alguma coisa</FormLabel>
												<Input {...field} placeholder="Alguma coisa" />
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

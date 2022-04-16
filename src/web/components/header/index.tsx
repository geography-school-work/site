import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button, Container, CustomModal, Li, Nav, Title, Ul } from "./styles";

export const Header: NextPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Container>
			<Title>Logo</Title>
			<Nav>
				<Ul>
					<Li>
						<Link href="/products">Produtos</Link>
					</Li>
					<Li>
						<Link href="/about-us">Sobre nós</Link>
					</Li>
				</Ul>
				<Button onClick={onOpen}>
					<Image
						src="/menu-button.svg"
						alt="menu button"
						width="24px"
						height="24px"
					/>
				</Button>
			</Nav>

			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent width="75%">
					<ModalCloseButton />
					<ModalBody>
						<CustomModal>
							<li>
								<Link href="/products">Produtos</Link>
							</li>
							<hr />
							<li>
								<Link href="/about-us">Sobre nós</Link>
							</li>
						</CustomModal>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Container>
	);
};

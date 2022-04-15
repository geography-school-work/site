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

import { Container, CustomModal } from "./styles";

export const Header: NextPage = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Container>
			<h1>Logo</h1>
			<nav>
				<ul>
					<li>
						<Link href="/products">Produtos</Link>
					</li>
					<li>
						<Link href="/about-us">Sobre nós</Link>
					</li>
				</ul>
				<button onClick={onOpen}>
					<Image
						src="/menu-button.svg"
						alt="menu button"
						width="24px"
						height="24px"
					/>
				</button>
			</nav>

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

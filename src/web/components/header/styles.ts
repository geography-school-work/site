import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.BLUE};
	height: 7rem;
	width: 100vw;
	align-items: center;
	color: ${({ theme }) => theme.WHITE};
	font-family: Inter;
`;

export const Title = styled.h1`
	margin-left: 4rem;
	font-weight: bolder;
	font-size: 2rem;

	@media (max-width: 600px) {
		margin-left: 2rem;
	}
`;

export const Nav = styled.nav`
	margin-right: 4rem;

	@media (max-width: 600px) {
		margin-right: 2rem;
	}
`;

export const Ul = styled.ul`
	display: flex;
	list-style: none;
	gap: 1rem;
	font-style: ${({ theme }) => theme.WHITE};

	@media (max-width: 470px) {
		display: none;
	}
`;

export const Li = styled.li`
	transition: 200ms;
	padding: 15px;
	cursor: pointer;

	&:hover {
		background-color: ${({ theme }) => theme.GREEN};
	}
`;

export const CustomLink = styled.a`
	font-size: 1.15rem;
	text-decoration: none;
	color: ${({ theme }) => theme.WHITE};
`;

export const Button = styled.button`
	border: none;
	background: none;
	align-items: center;
	display: none;

	@media (max-width: 470px) {
		display: flex;
	}
`;

export const CustomModal = styled.ul`
	margin-top: 1rem;
	list-style: none;
	width: 75%;
	font-family: "Poppins";

	> li {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
`;

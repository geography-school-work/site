import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-align: center;
	gap: 1rem;
`;

export const DataSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	> h2 {
		font-family: "Ubuntu";
		margin-top: 7vh;
		margin-bottom: 0;
		width: 25vw;
		font-size: 1.5rem;
		font-weight: bold;
		min-width: 18rem;
		margin-bottom: 1rem;
	}

	> p {
		font-size: 1.1rem;
		width: 50vw;
		min-width: 18rem;
		font-family: "Poppins";
	}
`;

export const CustomLink = styled.a`
	margin: 1rem 0;
	background-color: ${({ theme }) => theme.GREEN};
	border: none;
	border-radius: 1rem;
	font-family: "Poppins";
	font-weight: bold;
	text-decoration: none;
	padding: 1.25rem;
	color: ${({ theme }) => theme.WHITE};
`;

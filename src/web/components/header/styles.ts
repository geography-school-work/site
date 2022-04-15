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

	> h1 {
		margin-left: 4rem;
		font-weight: bolder;
		font-size: 2rem;
	}

	> nav {
		margin-right: 4rem;

		> ul {
			display: flex;
			list-style: none;
			gap: 1rem;
			font-style: ${({ theme }) => theme.WHITE};

			> li {
				transition: 200ms;
				padding: 15px;
				cursor: pointer;

				> a {
					font-size: 1.15rem;
					text-decoration: none;
					color: ${({ theme }) => theme.WHITE};
				}

				&:hover {
					background-color: ${({ theme }) => theme.GREEN};
				}
			}
		}

		> button {
			border: none;
			background: none;
			align-items: center;
			display: none;
		}
	}

	@media (max-width: 600px) {
		> h1 {
			margin-left: 2rem;
		}

		> nav {
			margin-right: 2rem;
		}
	}

	@media (max-width: 470px) {
		> nav {
			> ul {
				display: none;
			}

			> button {
				display: flex;
			}
		}
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

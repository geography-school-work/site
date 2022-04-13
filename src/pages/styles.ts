import styled from "styled-components";

export const HomeStyles = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    > h2 {
        font-family: "Ubuntu";
        margin-top: 7vh;
        margin-bottom: 0;
        width: 25vw;
        min-width: 18rem;
    }

    > p {
        font-size: 1.1rem;
        width: 50vw;
        min-width: 18rem;
        font-family: "Poppins";
    }
`;

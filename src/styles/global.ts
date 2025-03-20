import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    
    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
        scroll-behavior: smooth;
    }

    body, input, button, textarea {
        font-family: Arial, Helvetica;
        font-size: 16px;
        outline: none;
    } 

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: fiter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    ::selection {
        background-color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
`

export const Container = styled.div`
    width: 100%;
    max-width: 1400px; /* Limita a largura máxima */
    margin: 0 auto; /* Centraliza horizontalmente */
    padding: 0 5rem; /* Adiciona espaçamento interno */
    height: 100%; /* Permite que o conteúdo ocupe toda a altura */
`;
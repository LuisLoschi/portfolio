import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    width: 10rem;
    height: 50px;
    
    border: 0;
    padding: 0 1.4rem;
    border-radius: 5px;
    font-weight: 700;

    transition: all .5s ease;

    &:disabled {
        opacity: 0.5;
    }

    &:hover {
        filter: brightness(0.8);
    }
`;

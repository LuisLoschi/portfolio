import styled from "styled-components";
import { Container } from "../../styles/global";


export const NavContainer = styled.nav`
    width: 100%;
    height: 80px;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    transition: background-color 0.3s ease, box-shadow 0.3s ease;

    &.scrolled {
        background-color: rgba(35, 33, 41, 0.3);
        backdrop-filter: blur(20px);
    }

    > ${Container} {
        display: flex;
        justify-content: space-between; 
        align-items: center;
    }
`;

export const Links = styled.div`
    ul {
        display: flex;
        gap: 2rem;
        list-style: none;

        li {
            a {
                text-decoration: none;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
                font-size: 1.2rem;
                font-weight: bold;
                transition: color 0.3s;

                &:hover {
                    color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
                }
            }

            &.active a {
                color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
            }
        }
    }
`;

export const Logo = styled.div`
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.5rem;
        font-weight: bold;
        display: flex;
        align-items: center;

        span {
            color: ${({ theme }) => theme.COLORS.MAIN_COLOR};
        }
    }
`;
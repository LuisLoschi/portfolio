import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 1400px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    //grid-template-rows: 105px 128px auto 64px;
    grid-template-areas:
        "text image";

    align-items: center;
    padding: 0 5rem;
    margin: 0 auto;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    
    .image-container {
        grid-area: image;
        display: flex;
        justify-content: end;
        align-items: center;

        img {
            width: 100%;
            max-width: 500px;
            max-height: 500px;
            border-radius: 50%;
        }
    }
`;

export const Text = styled.div`
    color: ${({theme}) => theme.COLORS.MAIN_COLOR};
    
    font-size: 1.6rem;
    font-weight: 700;

    > h2 {
        font-size: 1.6rem;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > h2 span {
        color: ${({theme}) => theme.COLORS.MAIN_COLOR};
    }

    > p {
        padding: 1rem 0;

        font-size: 1rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    
`;

export const SocialMedia = styled.div`
    .social-icons {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;

        span a {
            display: flex; 
            align-items: center; 
            justify-content: center;

            color: ${({theme}) => theme.COLORS.MAIN_COLOR};
            font-size: 20px; 
            transition: all 0.3s ease;

            border: solid 1px ${({theme}) => theme.COLORS.MAIN_COLOR};
            border-radius: 50%;
            padding: .5rem;
        
            &:hover {
                color: ${({theme}) => theme.COLORS.GRAY_100};
                background-color: ${({theme}) => theme.COLORS.MAIN_COLOR};
            }
        }

    }
`;
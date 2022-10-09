import styled from 'styled-components';
import FadeIn from 'react-fade-in';
export const MoviePageStyled = styled(FadeIn)`
.main{
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    line-height: 1.2;
    height: 100vh
}
.title {
    background-color: ${({ theme }) => theme.mainColors.silver};
    color:black
    font-weight: bold;
    line-height: 1.2;
    height: 8vh;
    width: 100vw;
}
.data {
    background-color: ${({ theme }) => theme.mainColors.gold};
    margin-top: 1rem;
    margin-left: 2vw;
    margin-right: 2vw;
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.35;
    padding-left: 2vw;
    padding-right: 2vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}`
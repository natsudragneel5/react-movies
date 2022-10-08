import styled from 'styled-components';
import FadeIn from 'react-fade-in';
export const MoviePageStyled = styled(FadeIn)`
.main{
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    line-height: 1.2;
    height: 100vh
}
.title {
    background-color: ${({ theme }) => theme.mainColors.gold};
    color:black
    font-weight: bold;
    line-height: 1.2;
    height: 8vh;
    width: 100vw;
}
.data {
    margin-top: 1rem;
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.35;
    width: 20rem
}`
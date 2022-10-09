import styled from 'styled-components';
export const MovieCardStyled = styled.div`
.card {
    background-color: ${({ theme }) => theme.mainColors.gold};
    margin-left: 1rem;
    margin-top: 2rem;
    width: 20rem;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-align: center;
    color: black;
    border-radius: 10px;
    box-shadow: 
        0 1px 1px rgba(0, 0, 0, 0.1), 
        0 2px 2px rgba(0, 0, 0, 0.1), 
        0 4px 4px rgba(0, 0, 0, 0.1), 
        0 8px 8px rgba(0, 0, 0, 0.1), 
        0 16px 16px rgba(0, 0, 0, 0.1);
    height: 380px;
}
.title {
    height: 12vh;
    margin-left: 0.7rem;
    margin-right: 0.8rem;
    color:black
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 0.8;
}
.data {
    margin-top: 1rem;
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.35;
    width: 20rem;
    height: 12vh
}`
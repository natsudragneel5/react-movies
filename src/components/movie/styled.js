import styled from 'styled-components';
import FadeIn from 'react-fade-in';

export const FlexGrid = styled(FadeIn)`
  display: flex;
  background-color: ${({ theme }) => theme.mainColors.dark};
  flex-wrap: wrap;
  min-height: 100vh
`;

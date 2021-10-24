import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.medium};
    text-align: center;
  `}
  display: flex;
  justify-content: center;
`;

import styled, { css } from 'styled-components'

export const Container = styled.div`
 ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium}
    padding: ${theme.spacings.medium}
    max-width: 96rem;
    margin: 0 auto;
  `}
  max-width: 96rem;
   margin: 0 auto;
`

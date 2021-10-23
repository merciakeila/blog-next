import React from 'react'
import { Container } from './styled';

type MainContainerProps = {
children: React.ReactNode
}

export default function MainContainer({children}: MainContainerProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}

import React from 'react';

import { Container, Title } from './styles';

interface IButtonProps {
  title: string;
  color?: string;
}

export const Button = ({ title, color, ...rest }: IButtonProps) => {
  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
};

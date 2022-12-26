import React from 'react';
import { TouchableHighlightProps } from 'react-native';

import { Container, Title } from './styles';

interface IButtonProps extends TouchableHighlightProps {
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

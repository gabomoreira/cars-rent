import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface IConfirmButtonProps extends RectButtonProps {
  title: string;
}

export const ConfirmButton = ({ title, ...rest }: IConfirmButtonProps) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

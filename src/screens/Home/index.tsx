import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Header, HeaderContent, TotalCars } from './styles';

export const Home = () => {
  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <Header>
        <HeaderContent>
          <TotalCars>Logo</TotalCars>
          <TotalCars>Total de carros 12</TotalCars>
        </HeaderContent>
      </Header>
    </Container>
  );
};

import React from 'react';
import { StatusBar } from 'react-native';
import { CardCar } from '../../components/CardCar';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CardContainer,
} from './styles';

const data = {
  brand: 'AUDI',
  name: 'RS 5 Coupé',
  rent: {
    period: 'AO DIA',
    price: 789,
  },
  thumbnail:
    'http://1.bp.blogspot.com/-h-ks_GfSsTc/UljwZIEjgpI/AAAAAAAAZV8/2z1YD-grUR0/s1600/Carros-em-png-queroimagem-Cei%C3%A7a-Crispim+(7).png',
};

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

      <CardContainer
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <CardCar data={data} />}
      />
    </Container>
  );
};

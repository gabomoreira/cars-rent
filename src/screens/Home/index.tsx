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
    'https://img2.gratispng.com/20180205/jde/kisspng-chevrolet-camaro-car-chevrolet-chevelle-chevrolet-yellow-camaro-png-hd-5a7826dd3e7b46.2796944015178237092559.jpg',
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

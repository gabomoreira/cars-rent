import React from 'react';
import { useWindowDimensions } from 'react-native';

import { Container, Content, Title, Message, Footer } from './styles';

import LogoSvg from '../../assets/logo.svg';
import DoneSvg from '../../assets/done.svg';
import { ConfirmButton } from '../../components/ConfirmButton';
import { StatusBar } from 'expo-status-bar';

export const ScheduleComplete = () => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar backgroundColor="transparent" translucent style="light" />

      <LogoSvg width={width} height={200} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>Carro alugado!</Title>

        <Message>
          Agora você so precisa ir {'\n'}
          até a concessionária da RentCars {'\n'}
          pegar o seu automóvel. {'\n'}
        </Message>
      </Content>

      <Footer>
        <ConfirmButton title="OK" />
      </Footer>
    </Container>
  );
};

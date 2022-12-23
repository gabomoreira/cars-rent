import React from 'react';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  WrapperAccessory,
} from './styles';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';

import accelerator from '../../assets/accelerator.svg';
import speed from '../../assets/speed.svg';
import steering from '../../assets/steering-wheel.svg';
import drop from '../../assets/drop.svg';
import exchange from '../../assets/exchange.svg';
import people from '../../assets/people.svg';

export const CardDetails = () => {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            'http://1.bp.blogspot.com/-h-ks_GfSsTc/UljwZIEjgpI/AAAAAAAAZV8/2z1YD-grUR0/s1600/Carros-em-png-queroimagem-Cei%C3%A7a-Crispim+(7).png',
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>FORD</Brand>
            <Name>Camaro</Name>
          </Description>

          <Rent>
            <Period>AO DIA</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <WrapperAccessory>
          <Accessory name="380Km/h" icon={accelerator} />
          <Accessory name="3.2s" icon={speed} />
          <Accessory name="800 HP" icon={steering} />
          <Accessory name="Gasolina" icon={drop} />
          <Accessory name="Auto" icon={exchange} />
          <Accessory name="2 pessoas" icon={people} />
        </WrapperAccessory>

        <About>
          Este é um automóvel desportivo. Surgiu do lendário touro de lide
          indultrado na praça Real Maestranza de Servilla. É um belísimo carro
          para quem gosta de acelerar.
        </About>
      </Content>
    </Container>
  );
};

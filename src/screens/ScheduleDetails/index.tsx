import React from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

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
  WrapperAccessory,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';

import { Button } from '../../components/Button';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';

import accelerator from '../../assets/accelerator.svg';
import speed from '../../assets/speed.svg';
import steering from '../../assets/steering-wheel.svg';
import drop from '../../assets/drop.svg';
import exchange from '../../assets/exchange.svg';
import people from '../../assets/people.svg';

export const ScheduleDetails = () => {
  const theme = useTheme();

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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              size={RFValue(24)}
              name="calendar"
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>25/12/2022</DateValue>
          </DateInfo>

          <Feather
            size={RFValue(10)}
            name="chevron-right"
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>25/12/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title="Alugar agora" color={theme.colors.success} />
      </Footer>
    </Container>
  );
};

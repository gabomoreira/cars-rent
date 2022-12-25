import React from 'react';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';

import ArrowSvg from '../../assets/arrow-right.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from './styles';
import { Calendar } from '../../components/Calendar';

export const Schedules = () => {
  const theme = useTheme();

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent
      />

      <Header>
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma{'\n'}
          data de início e{'\n'}
          fim do aluguel{'\n'}
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>26/12/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  );
};

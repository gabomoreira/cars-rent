import React from 'react';
import { TouchableHighlightProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Wrapper,
  Content,
  BrandAndModelContainer,
  Brand,
  Name,
  Details,
  Period,
  PriceContainer,
  Price,
  ImageContainer,
  CarImage,
  Icon,
} from './styles';

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface ICardCarProps extends TouchableHighlightProps {
  data: CarData;
}

export const CardCar = ({ data, ...rest }: ICardCarProps) => {
  return (
    <Container {...rest}>
      <Wrapper>
        <Content>
          <BrandAndModelContainer>
            <Brand>{data?.brand}</Brand>
            <Name>{data?.name}</Name>
          </BrandAndModelContainer>

          <Details>
            <Period>{data?.rent?.period}</Period>
            <PriceContainer>
              <Price>{`R$ ${data?.rent?.price}`}</Price>
              <Icon source={require('../../assets/drop.svg')} />
            </PriceContainer>
          </Details>
        </Content>

        <ImageContainer>
          <CarImage
            source={{
              uri: data.thumbnail,
            }}
          />
        </ImageContainer>
      </Wrapper>
    </Container>
  );
};

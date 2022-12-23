import React from 'react';

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

interface ICardCarProps {
  data: CarData;
}

export const CardCar = ({ data }: ICardCarProps) => {
  return (
    <Container>
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
              <Icon source={require('../../assets/drop.png')} />
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

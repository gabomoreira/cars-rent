import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  border-radius: 5px;
  margin-bottom: 15px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Wrapper = styled.View`
  width: 100%;

  padding: 20px;

  flex-direction: row;
`;

export const Content = styled.View`
  width: 50%;
`;

export const BrandAndModelContainer = styled.View``;

export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_600};
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(15)}px;
`;

export const Details = styled.View`
  margin-top: 15px;
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.text_detail};
  font-size: ${RFValue(10)}px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.colors.main};
  font-size: ${RFValue(15)}px;
`;

export const Icon = styled.Image`
  width: 20px;
  height: 20px;

  margin-left: 20px;
`;

export const ImageContainer = styled.View`
  width: 50%;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100px;
`;

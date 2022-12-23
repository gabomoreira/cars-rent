import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

interface IImageIndexProps {
  active: boolean;
}

export const Container = styled.View`
  width: 100%;
`;

export const ImageIndexes = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  padding-right: 24px;
`;

export const ImageIndex = styled.View<IImageIndexProps>`
  width: 6px;
  height: 6px;

  margin-left: 8px;
  border-radius: 3px;

  background-color: ${({ theme, active }) =>
    active ? theme.colors.text : theme.colors.text_detail};
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 132px;

  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
  width: 280px;
  height: 132px;
`;

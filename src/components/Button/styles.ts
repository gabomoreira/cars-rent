import { TouchableHighlight } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IContainerProps extends RectButtonProps {
  color?: string;
}

export const Container = styled(TouchableHighlight)<IContainerProps>`
  width: 100%;

  padding: 19px;

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.main};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(15)}px;

  text-align: center;
`;

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.Text`
  width: 100%;
  height: 133px;

  background-color: ${({ theme }) => theme.colors.background_primary};
`;

import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  height: 40px;
  background-color: ${colors.primary};
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 4,
  },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  padding: 0 10px;
  border: 1px solid red;
`;

export const TabText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
`;

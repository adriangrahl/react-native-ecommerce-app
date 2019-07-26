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
  margin: 0 10px;
  flex: 1;
  padding-top: 3px;
  border-bottom-width: ${props => (props.selected ? 3 : 0)};
  border-bottom-color: ${colors.white};
`;

export const TabText = styled.Text`
  color: ${colors.white};
  font-size: 18px;
`;

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${metrics.basePadding}px;
`;

export const Image = styled.Image`
  height: 75px;
  width: 60px;
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: ${colors.darker};
`;

export const Brand = styled.Text`
  font-size: 10px;
  color: ${colors.regular};
`;

export const Price = styled.Text`
  margin-top: ${metrics.baseMargin}px
  font-size: 15px;
  font-weight: bold;
  color: ${colors.turquoise};
`;

export const AmountInput = styled.TextInput`
  height: 35px;
  width: 25px;
  font-size: 10px;
  border: 0.7px solid ${colors.light};
  color: ${colors.regular};
  margin-left: ${metrics.baseMargin}px;
  font-weight: bold;
`;

export const RemoveButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  },
})`
  margin-left: ${metrics.baseMargin * 2}px;
`;

export const RemoveIcon = styled(Icon)`
  font-size: 12px;
  color: ${colors.regular};
`;

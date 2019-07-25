import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View``;

export const Content = styled.View`
  align-items: center;
  padding: ${metrics.basePadding * 2}px;
`;

export const Image = styled.Image`
  height: 350px;
  width: 210px;
`;

export const Info = styled.View`
  margin-top: ${metrics.baseMargin}px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const BrandGroup = styled.View`
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.black};
`;

export const Brand = styled.Text`
  font-size: 10px;
  color: ${colors.regular};
`;

export const Price = styled.Text`
  font-size: 18px;
  color: ${colors.turquoise};
  font-weight: bold;
  align-items: flex-end;
`;

export const ButtonContainer = styled.View`
  margin-top: ${metrics.baseMargin}px;
  width: 100%;
  border-radius: ${metrics.baseRadius}px;
  background-color: ${colors.turquoise};
  align-items: center;
  justify-content: center;
  height: 35px;
`;

export const ButtonAdd = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})``;

export const ButtonText = styled.Text`
  color: ${colors.lighter};
  font-size: 12px;
  font-weight: bold;
`;

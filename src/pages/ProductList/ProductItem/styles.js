import styled from 'styled-components/native';
import { colors, metrics } from '~/styles';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  height: 180px;
  width: 120px;
`;

export const Info = styled.View`
  margin-top: ${metrics.baseMargin / 2}px;
  align-items: flex-start;
  flex-direction: column;
  width: 120px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.darker};
`;

export const Brand = styled.Text`
  font-size: 10px;
  color: ${colors.regular};
`;

export const Price = styled.Text`
  font-size: 15px;
  color: ${colors.turquoise};
  font-weight: bold;
`;

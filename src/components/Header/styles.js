import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '~/styles';

export const Container = styled.View`
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Title = styled.Text`
  color: ${colors.primary};
  font-weight: bold;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 15px;
  top: 15px;
  width: 100%;
`;

export const IconButton = styled(Icon)`
  color: ${colors.regular};
`;

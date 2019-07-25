import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  baseMargin: 10,
  basePadding: 20,
  baseRadius: 3,
  screeWidth: width < height ? width : height,
  screeHeight: width < height ? height : width,
};

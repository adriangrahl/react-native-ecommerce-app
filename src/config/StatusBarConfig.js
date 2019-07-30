import { StatusBar, Platform } from 'react-native';
import { colors } from '~/styles';

StatusBar.setBarStyle('dark-content');
StatusBar.setBackgroundColor(colors.white);

// StatusBar.setBarStyle('light-content');

// if (Platform.OS === 'android') {
//   StatusBar.setBackgroundColor('#111');
// }

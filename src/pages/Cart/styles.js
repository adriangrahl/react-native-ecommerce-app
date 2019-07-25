import styled from 'styled-components/native';
import { metrics, colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
`;

// export const CartFlatList = styled.FlatList.attrs({
//   columnWrapperStyle: {
//     marginTop: metrics.baseMargin * 2,
//     justifyContent: 'space-around',
//   },
// })`
//   border: 1px solid blue;
// `;

export const CartFlatList = styled.FlatList.attrs({
  // columnWrapperStyle: {
  //   marginTop: metrics.baseMargin * 2,
  //   justifyContent: 'space-around',
  // },
  // contentContainerStyle: {
  //   marginBottom: 20,
  // },
})`
  border: 1px solid red;
`;

export const SubTotal = styled.View`
  border: 1px solid blue;
  height: 100px;
  padding: ${metrics.basePadding}px;
  align-items: center;
`;

export const Text = styled.Text`
  color: ${colors.light};
  font-weight: bold;
`;

export const Amount = styled.Text`
  margin-top: ${metrics.baseMargin / 2}px;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.turquoise};
`;

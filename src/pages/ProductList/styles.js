import styled from 'styled-components/native';
import { metrics } from '~/styles';

export const Container = styled.View`
  justify-content: center;
  align-items: stretch;
  margin-bottom: 40px;
`;

export const ProductFlatList = styled.FlatList.attrs({
  columnWrapperStyle: {
    marginTop: metrics.baseMargin * 2,
    justifyContent: 'space-around',
  },
})`
  border: 1px solid red;
`;

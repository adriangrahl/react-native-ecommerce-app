import React from 'react';

import {
  Container,
  Image,
  Info,
  Name,
  Brand,
  Price,
  AmountInput,
  RemoveButton,
  RemoveIcon,
} from './styles';

const CartItem = ({ item }) => (
  <Container>
    <Image source={{ uri: item.image }} />
    <Info>
      <Name>{item.name}</Name>
      <Brand>{item.brand}</Brand>
      <Price>
$
        {item.price}
      </Price>
    </Info>
    <AmountInput keyboardType="numeric" />
    <RemoveButton onPress={() => {}}>
      <RemoveIcon name="times" size={16} />
    </RemoveButton>
  </Container>
);

export default CartItem;

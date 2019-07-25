import React from 'react';

import { TouchableOpacity } from 'react-native';

import {
  Container, Image, Info, Name, Brand, Price,
} from './styles';

/*
 {
    id: 1,
    name: 'Camiseta Hyperas Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
    price: 49.99,
  },
*/

const ProductItem = ({ item, handleDetails }) => (
  <TouchableOpacity onPress={() => handleDetails(item)}>
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
    </Container>
  </TouchableOpacity>
);

export default ProductItem;

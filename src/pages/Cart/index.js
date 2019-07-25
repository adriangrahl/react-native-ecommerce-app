import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import CartItem from './CartItem';

import Header from '~/components/Header';
import {
  Container, Content, CartFlatList, SubTotal, Text, Amount,
} from './styles';

const data = [
  {
    id: 1,
    name: 'Camiseta Hyperas Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
    price: 49.99,
  },
  {
    id: 2,
    name: 'Camiseta Double Tap Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/EpEXepU-tSbgo6ZMl4Y5BOdjelw=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-double-tap-preta-7115-8165043-1-product.jpg',
    price: 59.99,
  },
];

const TabIcon = ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor} />;

export default class Cart extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  componentDidMount() {}

  // refresh() {}

  renderItem = ({ item }) => <CartItem item={item} />;

  render() {
    return (
      <Container>
        <Header title="Cart" />
        <Content>
          {!!data && (
            <CartFlatList
              data={data}
              keyExtractor={item => String(item.id)}
              renderItem={this.renderItem}
              // renderItem={item => <CartItem item={{ item }} />}
              refresh={this.refresh}
              numColumns={1}
            />
          )}
          <SubTotal>
            <Text>Subtotal</Text>
            <Amount>$300.00</Amount>
          </SubTotal>
        </Content>
      </Container>
    );
  }
}

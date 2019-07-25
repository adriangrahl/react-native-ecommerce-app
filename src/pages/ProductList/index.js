import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

import { NavigationEvents } from 'react-navigation';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import ProductItem from './ProductItem';

import { Container, ProductFlatList } from './styles';

const products = [
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
  {
    id: 3,
    name: 'Camiseta Logo Azul',
    brand: 'Red Bull',
    image:
      'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
    price: 54.99,
  },
  {
    id: 4,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
  {
    id: 5,
    name: 'Camiseta Logo Azul',
    brand: 'Red Bull',
    image:
      'https://t-static.dafiti.com.br/aC9871vKWfL3bDgbhLx5sFLa7xs=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fred-bull-camiseta-red-bull-logo-azul-0272-7714033-1-product.jpg',
    price: 54.99,
  },
  {
    id: 6,
    name: 'Camiseta Primo Tipper',
    brand: 'Rip Curl',
    image:
      'https://t-static.dafiti.com.br/weG0u9eKZ4KBV-G0XFOQ5hoY4eI=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2frip-curl-camiseta-rip-curl-primo-tipper-preto-8138-3441052-1-product.jpg',
    price: 39.99,
  },
];

/**
 * {
    id: 1,
    name: 'Camiseta Hyperas Preta',
    brand: 'Quiksilver',
    image:
      'https://t-static.dafiti.com.br/czCvp3wBNPfehf7omYZfJacnxPY=/fit-in/427x620/dafitistatic-a.akamaihd.net%2fp%2fquiksilver-camiseta-quiksilver-hyperas-preta-8710-7136243-1-product.jpg',
    price: 49.99,
  },
 */

export default class ProductList extends Component {
  componentDidMount() {}

  loadProducts = () => {
    // TODO: refresh products
  };

  handleDetails = (item) => {
    const { navigation } = this.props;
    navigation.navigate('ProductDetails', { item });
  };

  renderListItem = ({ item }, handleDetails) => (
    <ProductItem item={item} handleDetails={handleDetails} />
  );

  render() {
    const loading = false; // this.state...

    return (
      <Container>
        <Header title="GoCommerce" />
        <Tabs />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <ProductFlatList
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={item => this.renderListItem(item, this.handleDetails)}
            refresh={this.loadProducts}
            numColumns={2}
            // refreshing={false}
          />
        )}
      </Container>
    );
  }
}

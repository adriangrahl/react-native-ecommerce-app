import React, { Component, Fragment } from 'react';

import Header from '~/components/Header';
import {
  Content,
  Image,
  Info,
  BrandGroup,
  Name,
  Brand,
  Price,
  ButtonContainer,
  ButtonAdd,
  ButtonText,
} from './styles';

export default class ProductDetails extends Component {
  componentDidMount() {}

  render() {
    const { navigation } = this.props;

    const item = navigation.getParam('item');

    return (
      <Fragment>
        <Header title="Product Details" navigateLocation="ProductList" />
        <Content>
          <Image source={{ uri: item.image }} />
          <Info>
            <BrandGroup>
              <Name>{item.name}</Name>
              <Brand>{item.brand}</Brand>
            </BrandGroup>
            <Price>
$
              {item.price}
            </Price>
          </Info>
          <ButtonContainer>
            <ButtonAdd onPress={() => {}}>
              <ButtonText>Add to Cart</ButtonText>
            </ButtonAdd>
          </ButtonContainer>
        </Content>
      </Fragment>
    );
  }
}

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartActions from '~/store/ducks/cart';

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

class ProductDetails extends Component {
  static propTypes = {
    addProduct: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleAddToCart = (item) => {
    const { addProduct, navigation } = this.props;
    addProduct(item);
    navigation.navigate('Cart');
  };

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
            <ButtonAdd onPress={() => this.handleAddToCart(item)}>
              <ButtonText>Add to Cart</ButtonText>
            </ButtonAdd>
          </ButtonContainer>
        </Content>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(ProductDetails);

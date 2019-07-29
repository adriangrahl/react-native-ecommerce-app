import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CartActions from '~/store/ducks/cart';

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

class CartItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      brand: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
      amount: PropTypes.number,
    }).isRequired,
    setAmount: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
  };

  removeNonDigits = text => text.replace(/[^0-9]/g, '');

  handleChange = (id, amountInput) => {
    let amount = this.removeNonDigits(amountInput);
    if (amount === '') amount = 0;

    const { setAmount } = this.props;
    setAmount(id, Number(amount));
  };

  handleRemove = (id) => {
    const { removeProduct } = this.props;
    removeProduct(id);
  };

  render() {
    const { item } = this.props;

    return (
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
        <AmountInput
          keyboardType="numeric"
          value={`${item.amount}`}
          onChangeText={text => this.handleChange(item.id, text)}
        />
        <RemoveButton onPress={() => this.handleRemove(item.id)}>
          <RemoveIcon name="times" size={16} />
        </RemoveButton>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(CartItem);

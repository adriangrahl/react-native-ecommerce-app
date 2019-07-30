import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import CartActions from '~/store/ducks/cart';

import CartItem from './CartItem';

import Header from '~/components/Header';
import {
  Container,
  Content,
  CartFlatList,
  SubTotal,
  Text,
  Amount,
  EmptyCartContainer,
} from './styles';

const TabIcon = ({ tintColor }) => <Icon name="shopping-cart" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

class Cart extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    total: 0,
  };

  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        brand: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
      }),
    ).isRequired,
  };

  static getDerivedStateFromProps = (props, currentState) => {
    const { data } = props;
    let total = 0;
    data.forEach((item) => {
      total += item.price * item.amount;
    });
    total = +total.toFixed(2);

    return {
      total,
    };
  };

  renderItem = ({ item }) => <CartItem item={item} />;

  render() {
    const { data } = this.props;
    const { total } = this.state;

    return (
      <Container>
        <Header title="Cart" />
        <Content>
          { data && data.length ? (
            <CartFlatList
              data={data}
              keyExtractor={item => String(item.id)}
              renderItem={this.renderItem}
              refresh={this.refresh}
              numColumns={1}
            />
          ) : (
            <EmptyCartContainer>
              <Text>Empty Cart</Text>
            </EmptyCartContainer>
          )}
          <SubTotal>
            <Text>Total</Text>
            <Amount>
$
              {total}
            </Amount>
          </SubTotal>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.cart.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);

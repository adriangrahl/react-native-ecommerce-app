import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

// import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import ProductItem from './ProductItem';

import { Container, ProductFlatList } from './styles';
import ProductsActions from '~/store/ducks/products';

class ProductList extends Component {
  static propTypes = {
    products: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          brand: PropTypes.string,
          image: PropTypes.string,
          price: PropTypes.number,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  componentDidMount() {}

  handleDetails = (item) => {
    const { navigation } = this.props;
    navigation.navigate('ProductDetails', { item });
  };

  renderListItem = ({ item }, handleDetails) => (
    <ProductItem item={item} handleDetails={handleDetails} />
  );

  render() {
    const {
      products: { loading, data },
    } = this.props;

    console.tron.log('loading, data:', loading, data);

    return (
      <Container>
        <Header title="GoCommerce" />
        <Tabs />
        {loading ? (
          <ActivityIndicator />
        ) : (
          !!data && (
            <ProductFlatList
              data={data}
              keyExtractor={item => String(item.id)}
              renderItem={item => this.renderListItem(item, this.handleDetails)}
              numColumns={2}
              refreshing={loading}
            />
          )
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);

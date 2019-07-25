import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CategoriesActions from '~/store/ducks/categories';

import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';

// const categories = [
//   {
//     id: 1,
//     title: 'Camisetas',
//   },
// ];

class Tabs extends Component {
  static propTypes = {
    loadCategoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    const { loadCategoriesRequest } = this.props;
    loadCategoriesRequest();
  }

  render() {
    const { categories } = this.props;

    return (
      <Container>
        <TabsContainer>
          {!!categories
            && categories.data.map(category => (
              // touchableOpacity
              <TabItem key={category.id}>
                <TabText>{category.title}</TabText>
              </TabItem>
            ))}
        </TabsContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories && state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tabs);

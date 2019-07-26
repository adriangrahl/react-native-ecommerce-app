import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity } from 'react-native';

import CategoriesActions from '~/store/ducks/categories';

import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';

class Tabs extends Component {
  static propTypes = {
    loadCategoriesRequest: PropTypes.func.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
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

  handleChangeCategory = (id) => {
    const { setSelectedCategory } = this.props;
    setSelectedCategory(id);
  };

  render() {
    const { categories } = this.props;

    const { selected } = categories;

    return (
      <Container>
        <TabsContainer>
          {!!categories
            && categories.data.map(category => (
              <TouchableOpacity
                key={category.id}
                onPress={() => this.handleChangeCategory(category.id)}
              >
                <TabItem selected={category.id === selected}>
                  <TabText>{category.title}</TabText>
                </TabItem>
              </TouchableOpacity>
            ))}
        </TabsContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tabs);

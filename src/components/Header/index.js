import React, { Component } from 'react';

import { withNavigation } from 'react-navigation';
import {
  Container, Title, BackButton, IconButton,
} from './styles';


class Header extends Component {
  goBack = () => {
    const { navigation, navigateLocation } = this.props;
    navigation.navigate(navigateLocation);
  };

  render() {
    const { title, navigateLocation } = this.props;

    return (
      <Container>
        {!!navigateLocation && (
          <BackButton onPress={this.goBack}>
            <IconButton name="chevron-left" size={16} />
          </BackButton>
        )}
        <Title>{title}</Title>
      </Container>
    );
  }
}

export default withNavigation(Header);

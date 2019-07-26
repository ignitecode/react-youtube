import React, { Component } from 'react';
import { Menu, Image, Search } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import debounce from 'lodash/debounce';
import Logo from '../../resources/images/logo.png';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            value: '',
        }
    }

    handleSearchChange() {

  }

  handleResultSelect() {

  }

  render() {
      return (
          <Menu stackable>
            <Menu.Item>
              <Image alt="logo" height="30" width="30" src={Logo} />
            </Menu.Item>
            <Menu.Item name="home" onClick={() => this.props.history.push('/')} active={this.props.location.pathname === '/'}>
              Home
            </Menu.Item>
            <Menu.Item name="favorites" onClick={() => this.props.history.push('/favorites')} active={this.props.location.pathname === '/favorites'}>
              Favorites
            </Menu.Item>
            <Menu.Item name="search">
                <Search
                    loading={false}
                    onResultSelect={(item) => this.handleResultSelect(item)}
                    onSearchChange={debounce(this.handleSearchChange, 500, { leading: true })}
                    results={this.state.results}
                    value={this.state.value}
                />
            </Menu.Item>
          </Menu>
      )
  }
}

export default withRouter(Navbar);
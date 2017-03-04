import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from "react-redux";

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton'

import './App.css';

function mapStateToProps(state) {
  return {
    currentUser: state.counterReducer['currentUser']
  };
}

class App extends Component {
  render() {
    var menuList = ['Signup', 'Login', 'Complains'];
    const buttonStyle = { color: 'white' };

    const beforeLogin = (
      <div className='Navbar-Main-Menu'>
        <FlatButton
          label='Sign Up'
          style={buttonStyle}
          onClick={() => browserHistory.push('/signup')}
          />
        <FlatButton
          label='Login'
          style={buttonStyle}
          onClick={() => browserHistory.push('/login')}
          />
      </div>
    );
    const navbar = (this.props.currentUser && this.props.currentUser.email) ? (
      <div className='Navbar-Main-Menu'>
        <FlatButton
          label='View Sales on Stores'
          style={buttonStyle}
          onClick={() => browserHistory.push('/viewSale')}
          />
        <FlatButton
          label='View Products'
          style={buttonStyle}
          onClick={() => browserHistory.push('/viewProduct')}
          />
        <FlatButton
          label='Add Product Details'
          style={buttonStyle}
          onClick={() => browserHistory.push('/productDetails')}
          />
        <FlatButton
          label='Add Sales Details'
          style={buttonStyle}
          onClick={() => browserHistory.push('/saleDetails')}
          />
        <FlatButton
          label='Add Product'
          style={buttonStyle}
          onClick={() => browserHistory.push('/addProduct')}
          />
        <FlatButton
          label='Add Store'
          style={buttonStyle}
          onClick={() => browserHistory.push('/addStore')}
          />
      </div>
    ) : beforeLogin;
    return (
      <div className="App">
        <div>
          <AppBar title="Inventory App" iconElementRight={navbar} />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);

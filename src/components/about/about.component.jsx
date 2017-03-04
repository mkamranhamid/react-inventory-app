import React, { Component } from 'react';
import { connect } from "react-redux";
import { browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'

import {GitAction} from '../../store/action/gitAction'
import './about.component.css';
import '../../app/App.css';

function mapStateToProps(state) {
    return {
        currentUser: state.counterReducer['currentUser']
    };
}

function mapDispatchToProps(dispatch) {
    return {
      loginUser: (credentials) => dispatch(GitAction.CallLogin(credentials))
    };
}


class AboutComponent extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.OnSubmitLogin = this.OnSubmitLogin.bind(this)

  }
  state = {
    email: '',
    password: ''
  }
  OnSubmitLogin(e) {
    e.preventDefault();
    var email = e.target.firstChild.value;
    var password = e.target.firstChild.value;
    console.log('email ', email)
    console.log('password ', password)
    this.props.loginUser(this.state)
  }
  handleChange(e) {
    if (e.target.type == 'email') {
      this.setState({
        email: e.target.value
      })
    } else {
      this.setState({
        password: e.target.value
      })
    }
  }
  render() {
    if (this.props.currentUser && this.props.currentUser.email) {
      browserHistory.push('/productDetails')
    }
    const buttonStyle = { width: '100%' }

    return (
      <div className="App">
        <h1>Login</h1>
        <div>
            <Paper className='Login-Panel'>
                <form style={{ padding: '16px', margin: '0px' }} className='LoginForm' onSubmit={this.OnSubmitLogin}>
                        
                        <TextField
                        id="text-field-controlled"
                        hintText="Email"
                        value={this.state.email}
                        onChange={({ target }) => { this.setState({ email: target.value }) } } />
                    <br />
                    <TextField
                        id="text-field-controlled1"
                        hintText="Password"
                        value={this.state.password}
                        type="password"
                        onChange={({ target }) => { this.setState({ password: target.value }) } } />
                   
                    <div className='LoginForm-Submit'>
                        <RaisedButton
                            label='Sign-in'
                            primary
                            type='submit'
                            style={buttonStyle}
                            />
                    </div>
                </form>
            </Paper>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutComponent);

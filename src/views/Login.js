import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {login, register, getUser} from '../util/MediaAPI';

class Login extends Component {
  state = {
    user: {
      username: '',
      password: '',
      email: '',
      full_name: '',
      picture: ''
    },
    toggleForm: true,
    userAvailable: true,
  };

  handleLoginSubmit = (evt) => {
    evt.preventDefault();
    this.doLogin();
  };

  handleRegisterSubmit = (evt) => {
    evt.preventDefault();
    register(this.state.user).then(user => {
      console.log(user);
      this.doLogin();
    });
  };

  doLogin = () => {
    login(this.state.user.username, this.state.user.password).then(response => {
      console.log(response);
      this.props.setUser(response.user);
      localStorage.setItem('token', response.token);
      this.props.history.push('/home');
    });
  };

  handleInputChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;

    console.log(value, name);

    this.setState((prevState) => {
      return {
        user: {
          ...prevState.user,
          [name]: value,
        },
      };
    });
  };

  checkUserAvailable = (evt) => {
    // tarkasta onko käyttäjätunnus vapaa
    // jos ei, tee esim alert()
  };

  componentDidMount() {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token') !== null) {
      getUser(localStorage.getItem('token')).then(response => {
        this.props.setUser(response);
        this.props.history.push('/home');
      });
    }
  }

  render() {
    return (
        <React.Fragment>
          <h1>Login</h1>
          <form onSubmit={this.handleLoginSubmit}>
            <input type="text" name="username" placeholder="username"
                   value={this.state.user.username}
                   onChange={this.handleInputChange}/>
            <br/>
            <input type="password" name="password" placeholder="password"
                   value={this.state.user.password}
                   onChange={this.handleInputChange}/>
            <br/>
            <button type="submit">Login</button>
          </form>
          <h1>Register</h1>
          <form onSubmit={this.handleRegisterSubmit}>
            <input type="text" name="username" placeholder="username"
                   value={this.state.user.username}
                   onChange={this.handleInputChange}/>
            <br/>
            <input type="password" name="password" placeholder="password"
                   value={this.state.user.password}
                   onChange={this.handleInputChange}/>
            <br/>
            <input type="email" name="email" placeholder="email"
                   value={this.state.user.email}
                   onChange={this.handleInputChange}/>
            <br/>
            <input type="text" name="full_name" placeholder="full name"
                   value={this.state.user.full_name}
                   onChange={this.handleInputChange}/>
            <br/>
            <button type="submit">Login</button>
          </form>
        </React.Fragment>
    );
  }
}

Login.propTypes = {
  setUser: PropTypes.func,
  history: PropTypes.object,
};

export default Login;
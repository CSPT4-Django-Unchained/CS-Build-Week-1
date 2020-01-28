import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Label, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const url =
	"https://django-unchained-mud-staging.herokuapp.com/api/registration/";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password1: '',
      password2: ''
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      [ name ]: value
    });
  }

  onSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password1: this.state.password1,
      password2: this.state.password2
    }

    axios
      .post(url, user)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('token', res.data.key)
        this.props.history.push('/world')
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} >
          <h3>Create an Account</h3>
          <Form.Group >
            <Label>
              Username:
              <Input
                name="username"
                value={this.state.username}
                onChange={this.onChange}
              />
            </Label>

            <Label>
              Password:
              <Input
                name="password1"
                value={this.state.password1}
                onChange={this.onChange}
                type="password"
              />
              Re-enter Password:
              <Input
                name="password2"
                value={this.state.password2}
                onChange={this.onChange}
                type="password"
              />
            </Label>
            <Button>Submit</Button>
          </Form.Group>

          <Form.Group >
            <h3>
              Already have an account?
            </h3>
            <Link to='/login'>
              <Button>Back to Login Page</Button>
            </Link>
          </Form.Group>
        </Form>

      </div>
    )
  }
}

export default Register;

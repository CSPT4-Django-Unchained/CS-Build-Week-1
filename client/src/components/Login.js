import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Label, Input} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const url = "https://djngo-unchained-mud-staging.herokuapp.com/api/login/";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    axios
			.post(url, user)
			.then(res => {
				localStorage.setItem("token", res.data.key);

				console.log("ISTHISToken::", res.data.key);

				this.props.history.push("/world");
			})
			.catch(err => {
				console.log("error:", err.response);
			});
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} style={{display: 'flex', justifyContent: 'center'}}>
          <h3> Game Login </h3>
          <Form.Group>
            <Label>
              Username:
              <Input
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </Label>

            <Label>
              Password:
              <Input
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </Label>
            <Button>Submit</Button>
          </Form.Group>
        </Form>
        <Form style={{display: 'flex', justifyContent: 'center'}}>
          <Form.Group >
            <h3>
              Don't have an account?
            </h3>
            <Link to='/register'>
              <Button >Create Account</Button>
            </Link>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default Login

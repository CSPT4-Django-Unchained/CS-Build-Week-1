import React, { Component } from "react";
import axios from 'axios';
import axiosConfig from "../axiosConfig";

const url = 'https://django-unchained-mud-staging.herokuapp.com/api/adv/ init'

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onClick = () => {
    axiosConfig.get(url)
      .then((res) => {

        console.log(res.data)
      })
      .catch(err => {
        console.log('error:', err.response)
      });

  }

  render() {
    return (
      <div>
        <h1>
          Multi-User Game
        </h1>

        <button onClick={this.onClick}>
          click here
        </button>

      </div>
    )

  }
};

export default World;

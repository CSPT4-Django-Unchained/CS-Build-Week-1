import React, { Component } from "react";
import axios from 'axios';
import axiosConfig from "../axiosConfig";

import Room from './Room'

const url = 'https://django-unchained-mud-staging.herokuapp.com/api/adv/rooms/'

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    }
  }

  componentDidMount = () => {
    axios.get(url)
      .then((res) => {
        this.setState({
          rooms: res.data
        })
      })
      .catch(err => {
        console.log('error:', err.response)
      });

  }

  render() {
    return (
      <div>
        {this.state.rooms.map(singleRoom => {
          return <Room room={ singleRoom } />;
        })}
      </div>
    );
  }
};

export default World;

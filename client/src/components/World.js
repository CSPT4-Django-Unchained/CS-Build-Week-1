import React, { Component } from "react";
import axios from 'axios';
import axiosConfig from "../axiosConfig";
import styled from "styled-components";

import Room from './Room'

const url = 'https://django-unchained-mud-staging.herokuapp.com/api/adv/rooms/'

const StyledWorld = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px 200px 200px 200px 200px 200px 200px 200px 200px;
`

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
    const { n_to, s_to, e_to, w_to } = this.state.rooms
    return (
      
      <StyledWorld>
        <div>
          <button>North</button>
          <button>South</button>
          <button>West</button>
          <button>East</button>
        </div>
        {console.log(this.state.rooms)}
        {this.state.rooms.map(singleRoom => {
          return <Room key={ this.state.id } room={ singleRoom } />;
        })}
      </StyledWorld>
    );
  }
};

export default World;

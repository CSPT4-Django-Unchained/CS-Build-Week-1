import React, { Component } from "react";
import axios from 'axios';
import axiosConfig from "../axiosConfig";

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
          return <RoomDetails room={singleRoom} />;
        })}
      </div>
    );
  }
};

function RoomDetails({ room }) {
  const { title, description } = room;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default World;

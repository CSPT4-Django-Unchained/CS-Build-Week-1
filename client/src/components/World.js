import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

import Room from "./Room";

const StyledWorld = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px 200px 200px 200px 200px 200px 200px 200px 200px;
`;

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  initPlayer = () => {
    const token = localStorage.getItem("token");

    axios({
      url: "https://lambda-mud-test.herokuapp.com/api/adv/init/",
      method: "GET",
      headers: {
        Authorization: `Token 626a1a9d5ab38fe08f0bab5d5b75f13fb36a12d0`
      }
    })
    .then(res =>  {
      console.log('Init', res.data)
    })
  }

  componentDidMount = () => {
    this.initPlayer();

    const token = localStorage.getItem("token");
    axios({
      url: "https://lambda-mud-test.herokuapp.com/api/adv/rooms/",
      method: "GET",
      headers: {
        Authorization: `Token 626a1a9d5ab38fe08f0bab5d5b75f13fb36a12d0`
      }
    })
      .then(res => {
        console.log("CDM", res)
        this.setState({
          rooms: res.data
        });
      })
      .catch(err => {
        console.log("error:", err.response);
      });
  };

  movePlayer = (dir) => {
    const token = localStorage.getItem("token");

    axios({
      url: "https://lambda-mud-test.herokuapp.com/api/adv/move/",
      method: "POST",
      data: {
        direction: dir
      },
      headers: {
        Authorization: `Token 626a1a9d5ab38fe08f0bab5d5b75f13fb36a12d0`
      }
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log('error:', err.response)
      })
  }

  render() {
    return (
      <StyledWorld>
        <div>
          <button onClick={ () => this.movePlayer('n') }>North</button>
          <button onClick={ () => this.movePlayer('s') }>South</button>
          <button onClick={ () => this.movePlayer('w') }>West</button>
          <button onClick={ () => this.movePlayer('e') }>East</button>
        </div>

        {/* {this.state.rooms.map(singleRoom => {
          return <Room key={this.state.id} room={singleRoom} />;
        })} */}
      </StyledWorld>
    );
  }
}

export default World;

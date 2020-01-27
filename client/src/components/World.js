import React, { Component } from "react";
import styled from "styled-components";
import axiosConfig from '../axiosConfig'
import Room from "./Room";

const initUrl = 'api/adv/init/';
const roomsUrl = 'api/adv/rooms/';
const moveUrl = 'api/adv/move/';

const StyledWorld = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px 200px 200px 200px 200px 200px 200px 200px 200px;
  overflow: scroll;
`;

const NavButtons = styled.div`
  position: fixed;
  
`

class World extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      currentActiveRoom: '',
    };
  }

  initPlayer = () => {
    axiosConfig()
      .get(initUrl)
      .then(res =>  {
        console.log('Init', res.data)
        this.setState({
          currentActiveRoom: res.data.title,
        })
      })
      .catch(e => console.log('Error initPlayer', e));
  }

  componentDidMount = () => {
    this.initPlayer();

    axiosConfig()
      .get(roomsUrl)
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
    axiosConfig()
      .post(moveUrl, {direction: dir})
      .then(res => {
        console.log("MOVED", res.data)
        this.setState({
          currentActiveRoom: res.data.title
        })
      })
      .catch(err => {
        console.log('error:', err.response)
      })
  }

  render() {
    console.log('ACTIVEROOM', this.state.currentActiveRoom)
    return (
      <StyledWorld>
        <NavButtons>
          <button onClick={ () => this.movePlayer('n') }>North</button>
          <button onClick={ () => this.movePlayer('s') }>South</button>
          <button onClick={ () => this.movePlayer('w') }>West</button>
          <button onClick={ () => this.movePlayer('e') }>East</button>
        </NavButtons>

         {this.state.rooms.map((singleRoom, index) => {
          return <Room key={index}
                       room={singleRoom}
                       isPlayerInside={
                         this.state.currentActiveRoom === singleRoom.title
                       }
          />;
        })}
      </StyledWorld>
    );
  }
}

export default World;

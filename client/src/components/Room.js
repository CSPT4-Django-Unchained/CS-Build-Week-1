import React from "react";
import styled from "styled-components"

const RoomStyle = styled.div`
  background: ${props => props.isPlayerInside ? "yellow" : "grey"};
  border: 1px solid red;
  display: flex;
  justify-content: center;
`


const Room = ({room, isPlayerInside}) => {

    const { title, description } = room;

    return (
      <RoomStyle isPlayerInside={isPlayerInside}>
        <h2>{title}</h2>
        {/* <p>{description}</p> */}
      </RoomStyle>
    );

}

export default Room;

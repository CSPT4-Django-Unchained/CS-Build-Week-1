import React from "react";
import styled from "styled-components"

const RoomStyle = styled.div `
  background: grey;
  border: 1px solid red;
  display: flex;
  justify-content: center;
`


const Room = (props) => {

    const { title, description } = props.room;

    return (
      <RoomStyle>
        <h2>{title}</h2>
        {/* <p>{description}</p> */}
      </RoomStyle>
    );
  
}

export default Room;

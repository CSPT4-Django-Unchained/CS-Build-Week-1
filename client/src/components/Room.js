import React from "react";


const Room = (props) => {

    const { title, description, n_to, s_to, e_to, w_to } = props.room;

    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>North</button>
        <button>South</button>
        <button>West</button>
        <button>East</button>
      </div>
    );
  
}

export default Room;

import React from 'react';
import axios from 'axios';


class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onClick = () => {
    axios.get('http://localhost:8000/api/adv/ init')
      .then((res) => {

        console.log(res)
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

import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const Home = () => {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          django_unchained MUD
        </p>

        <Link to='/login'>
          <Button > Register/Login </Button>
        </Link>

      </header>
    </div>
  );
}

export default Home

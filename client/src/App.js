import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Router } from '@reach/router';
import List from './components/List';
import PlayerForm from './components/PlayerForm';
import Status from './components/Status';
import './App.css';

function App() {
  return (
    <div className="container bg-light" style={{height: 900}}>
      <div className="top jumbotron text-center">
        {/* <h1>Team Manager</h1> */}
      </div>
      <div className="logo text-center">
        <h1>Team Manager</h1>
      </div>
      <Link className="btn btn-warning mt-2 mr-2" to="/">Manage Players</Link>
      <Link className="btn btn-warning mt-2" to="/status">Manage Player Status</Link>
      <Router className="my-5">
        < List path="/" />
        < PlayerForm path="/addplayer" />
        < Status path="/status" />
      </Router>
      <div className="ending jumbotron bg-info text-center">
        <h3>Create your fantasy draft and keep track of wins/losses</h3>
      </div>
    </div>
  );
}

export default App;

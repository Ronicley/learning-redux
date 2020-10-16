import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './app/home'
import Login from './app/login'
import Header from './app/header'
import Counter from './app/counter'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

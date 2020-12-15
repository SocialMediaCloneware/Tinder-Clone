import React from 'react';
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">

    {/* <Router>      */}
    <Router>  
    <Switch>

    <Route path="/chat">
    {/* Chat component */}
    <Header backButton="/" />

    </Route>

    <Route path="/">
      {/* Header */}
      <Header />
      {/* Tinder Card Component */}
      <TinderCards />

      <SwipeButtons />

    </Route>

  </Switch>
{/* Inidividual chat screen */}
</Router>
    </div>
  );
}

export default App;

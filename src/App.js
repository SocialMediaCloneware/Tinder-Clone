import React from 'react';
import './App.css';
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">

    {/* <Router>  */}
    <Router>  
    <Switch>

    <Route path="/chat/:person">

    {/* Back Button */}
    <Header backButton="/chat" />
    
    {/* Chatscreen component */}
    <ChatScreen />
    </Route>

    <Route path="/chat">

    {/* Back Button */}
    <Header backButton="/" />
    
    {/* Chat component */}
    <Chats />
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

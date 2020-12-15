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

    <Route path="/tinder-clone/chat/:person">

    {/* Back Button */}
    <Header backButton="/tinder-clone/chat" />
    
    {/* Chatscreen component */}
    <ChatScreen />
    </Route>

    <Route path="/tinder-clone/chat">

    {/* Back Button */}
    <Header backButton="/tinder-clone/" />
    
    {/* Chat component */}
    <Chats />
    </Route>

    <Route path="/tinder-clone/">
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

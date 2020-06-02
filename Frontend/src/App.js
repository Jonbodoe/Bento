import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  // withRouter,
  // Link
} from "react-router-dom";
import Navigation from './Components/Navigation';
import MediaWidgets from './Components/MediaWidgets';
import IndexPage from './Pages/IndexPage';
import Youtube from './Pages/Youtube';
import Twitch from './Pages/Twitch';
import Twitter from './Pages/Twitter';
// import WidgetData from './Data/WidgetData';

function App() {
  return (
    <Switch>
    <Route exact path="/">
        <IndexPage>
          <Navigation />
          <MediaWidgets />
        </IndexPage>

    </Route>
    <Route path="/twitter">
      <Twitter/>
    </Route>
    <Route path="/twitch">
      <Twitch/>
    </Route>
    <Route path="/youtube">
      <Youtube/>
    </Route>
  
    
    </Switch>
  );

}

export default App;

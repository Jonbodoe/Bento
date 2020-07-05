import React, { useContext } from 'react';
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
import Store from './Data/State/Store';
import AppContext from './Data/State/AppContext';


// import WidgetData from './Data/WidgetData';

function App() {
  // const stateContext = useContext(AppContext);
  // const mode = stateContext.themeMode;
  return (
    <>
     <Store>
      <Switch>
        <Route exact path="/">
          <IndexPage>
            <div className="py-4 text-right shadow-sm px-5 container-fluid">
              <h1 className="font-weight-bold">Bento</h1>
              <h3 className="text-secondary">For all your needs, Pat...</h3>
            </div>

            <MediaWidgets />
          </IndexPage>

        </Route>
        <Route path="/twitter">
          <Navigation title="Twitter" />
          <Twitter />
        </Route>
        <Route path="/twitch">
          {/* <div> */}
          <Navigation title="Twitch"/>
          <Twitch />
          {/* </div>s */}
        </Route>
        <Route path="/youtube">
          <Navigation title="Youtube" />
          <Youtube />
        </Route>
      </Switch>
      </Store>
    </>
  );

}

export default App;

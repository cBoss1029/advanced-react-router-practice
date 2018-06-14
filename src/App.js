import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Profiles from './components/Profiles';
import Marquee from './components/Marquee';
import Wall from './components/Wall';
import Charts from './components/Charts';
import Tables from './components/Tables';
import Settings from './components/Settings';

import {
  BrowserRouter,
  Route,
  Switch
 } from "react-router-dom";

function App() {
  return (
    <div> 
      <BrowserRouter>
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          <TopNav />
          <SideNav />
        </nav>
        <div style={{backgroundColor: "white"}}>
            <Switch>
              {/*if the string "/" is in the address bar show the Dasboard component*/}
              <Route path="/charts" component={Charts} />{/*order matters, always put the route with path='/' last*/}
              <Route path="/tables" component={Tables} />{/*order matters, always put the route with path='/' last*/}
              <Route path="/settings" component={Settings} />{/*order matters, always put the route with path='/' last*/}
              <Route path="/wall" component={Wall} />{/*order matters, always put the route with path='/' last*/}
              <Route path="/profiles" component={Profiles} />{/*order matters, always put the route with path='/' last*/}
              <Route path="/marquee/:text" component={Marquee} />{/*order matters, always put the route with path='/' last*/}
              <Route path="/profile/:id" component={Profile} />{/*order matters, always put the route with path='/' last*/}
              <Route path="/" component={Dashboard} />{/*order matters, always put the route with path='/' last*/}
            </Switch>
        </div>
      </div>
      </BrowserRouter>
    </div>

  );
}



export default App;

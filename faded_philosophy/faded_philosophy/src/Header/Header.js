import React, {Component} from "react";
import "../App/App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navigation from "../Navigation/Navigation"
import Strains from "../Strains"
import DropdownContainer from "../DropdownContainer/DropdownContainer";
import Philosophers from "../Philosophers"
import Spirits from "../Spirits"
import Pairings from "../Pairings/Pairings"



class Header extends Component {

    render() {
    return (
      <Router>
          <header>
            <section>
              <Link 
              to="/">
                <h1>FADED</h1>
                <h2>PHILOSOPHY</h2>
              </Link>
            </section>
            <Navigation />
          </header>
          <div>
            <Switch>
                <Route exact path="/">
                  <DropdownContainer />
                </Route>
                <Route exact path="/strains">
                  <Strains />
                </Route>
                <Route exact path="/spirits">
                  <Spirits />
                </Route>
                <Route exact path="/philosophers">
                  <Philosophers />
                </Route>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default Header;


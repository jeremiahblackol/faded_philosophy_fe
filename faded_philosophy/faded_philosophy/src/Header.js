import React, {Component} from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navigation from "./Navigation"
import Strains from "./Strains"
import DropdownContainer from "./DropdownContainer";
import Philosophers from "./Philosophers"
import Spirits from "./Spirits"


class Header extends Component {
  
  // }

    // updateLocation = (event) => {
    //   event.preventDefault()
    //   // this.setState({ location: event.target.name })
    //   this.props.setLocation(this.state.location)
    // }

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
                <Route path="/strains">
                  <Strains />
                </Route>
                <Route exact path="/spirits">
                  <Spirits />
                </Route>
                <Route path="/philosophers">
                  <Philosophers />
                </Route>
            </Switch>
          </div>
        </Router>
    )
  }
}

export default Header;


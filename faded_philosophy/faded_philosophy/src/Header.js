import React, {Component} from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Strains from "./Strains"
import DropdownContainer from "./DropdownContainer";
import Philosophers from "./Philosophers"
import Spirits from "./Spirits"


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // location: '',
    }
  }

    updateLocation = (event) => {
      event.preventDefault()
      // this.setState({ location: event.target.name })
      this.props.setLocation(this.state.location)
    }

    render(props) {
    return (
      <Router>
          <header>
            <section>
              <h1>FADED</h1>
              <h2>PHILOSOPHY</h2>
            </section>
            <nav>
              <Link to={"/"}>
                <button 
                name="/"
                className="navButton">
                    HOME
                </button>
              </Link> 
              <Link to={"/strains"}>
                <button  
                name="/strains"
                className="navButton">
                    STRAINS
                </button>
              </Link> 
              <Link to={"/spirits"}>
                <button  
                name="/spirits"
                className="navButton">
                    SPIRITS
                </button>
              </Link> 
              <Link to={"/philosophers"}>
                <button 
                name="/philosophers" 
                className="otherNavButton">
                    PHILOSOPHERS
                </button>
              </Link> 
            </nav>
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


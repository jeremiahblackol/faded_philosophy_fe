import React, {Component}from "react";
import Header from "./Header";
import DropdownContainer from "./DropdownContainer"
import Strains from "./Strains"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



// do a main container that renders based on the path
// what other components will i need?
// strains, philosophers, spirits, experience

class Home extends Component {
    constructor() {
        super();
        this.state = {
            currentLocation: "/"
        }
    }


  setLocation = (addLocation) => {
    this.setState({ currentLocation: addLocation})
  }

//   componentDidMount() {
//       if (this.state.currentLocation === "") {
//           this.setState({ currentLocation: <DropdownContainer />})
//       }

//       if (this.state.currentLocation === "Strains") {
//           this.setState({ currentLocation: <Strains />})
//       }
//   }

    render() {
        return (
            <>
            <Router>
                <Switch>
                <Route exact path="/">
                <DropdownContainer/>
                </Route>
                <Route path="/strains">
                <Strains />
                </Route>
                </Switch> 
            </Router>
            </>
        )
    }
}

export default Home; 
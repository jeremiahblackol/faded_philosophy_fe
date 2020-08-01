import React from "react";
import "./App.css"
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Strains from "./Strains"
import Home from "./Home"


const Header = () => {
    return (
      <BrowserRouter>
          <header>
            <h1>FADED</h1>
            <h2>PHILOSOPHY</h2>
            <nav>
              <NavLink to={"/"}>
                <button className="submitButton">
                    HOME
                </button>
              </NavLink> 
              <Route exact path="/" render={() => <Home />} />
              <NavLink to={"/strains"}>
                <button className="submitButton">
                    STRAINS
                </button>
              </NavLink> 
              <Route exact path="/strains" render={() => <Strains />} />
              <NavLink to={"/spirits"}>
                <button className="submitButton">
                    SPIRITS
                </button>
                </NavLink> 
              {/*

              // always want it to render the main component, pass props in to tell it what to render
              //inside the main
              <Route exact path="/spirits" render={() => <Spirits />} />
              <NavLink to={"/philosophers"}>
                <button className="submitButton">
                    PHILOSOPHERS
                </button>
              </NavLink> 
              <Route exact path="/philosophers" render={() => <Philosophers />} /> 
              */}
            </nav>
          </header>
        </BrowserRouter>
    )
}

export default Header;
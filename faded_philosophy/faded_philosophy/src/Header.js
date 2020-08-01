import React from "react";
import "./App.css"
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Strains from "./Strains"
import Home from "./Home"


const Header = () => {
    return (
      <BrowserRouter>
          <header>
            <section>
              <h1>FADED</h1>
              <h2>PHILOSOPHY</h2>
            </section>
            <nav>
              <NavLink to={"/"}>
                <button className="navButton">
                    HOME
                </button>
              </NavLink> 
              {/* <Route exact path="/" render={() => <Home />} /> */}
              <NavLink to={"/strains"}>
                <button className="navButton">
                    STRAINS
                </button>
              </NavLink> 
              <NavLink to={"/spirits"}>
                <button className="navButton">
                    SPIRITS
                </button>
              </NavLink> 
              <NavLink to={"/philosophers"}>
                <button className="navButton">
                    <span>PHILOSOPHERS</span>
                </button>
              </NavLink> 
              {/* <Route exact path="/strains" render={() => <Strains />} /> */}
              {/*
                <Route exact path="/spirits" render={() => <Spirits />} />
              

              // always want it to render the main component, pass props in to tell it what to render
              //inside the main
              <Route exact path="/philosophers" render={() => <Philosophers />} /> 
              */}
            </nav>
          </header>
        </BrowserRouter>
    )
}

export default Header;
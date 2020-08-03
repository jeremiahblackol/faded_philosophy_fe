import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Navigation = () => {
    return (
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
    )
}

export default Navigation
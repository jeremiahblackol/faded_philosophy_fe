import React, { Component } from "react";
import "../App/App.css"
import { toneChecker } from '../ApiCalls'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Pairings from "../Pairings/Pairings"


// then i want to say if tone exists, render a new component

class DropdownContainer extends Component {
    constructor() {
        super();
        this.state = {
           userMood: "",
           userVibe: "",
           userHue: "",
           userSentence: "",
           tone: {},
           isLoaded: false
        }
    }

     handleChange = (event) => {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })
    }

    getTone = async () => {
        let checkedTone;
        if (this.state.userMood && this.state.userVibe && this.state.userHue && !this.state.userSentence) {
            checkedTone = await toneChecker(this.state.userMood, this.state.userVibe, this.state.userHue)
            this.setState(prevState => ({...prevState, tone: checkedTone.document_tone.tones, isLoaded: true}))
            console.log("tone in 1st if", checkedTone)
        }

        if (this.state.userSentence) {
            checkedTone = await toneChecker(this.state.userSentence)
            this.setState(prevState => ({...prevState, tone: checkedTone.document_tone.tones, isLoaded:true}))
            console.log("tone in function", checkedTone)
        }
    }

    

    render() {
        return (
            <Router>
                <section>
            <form 
            className="dropdownContainer">
                <section className="containerTitle">
                    <h3>Please select from the following options:</h3>
                </section>
                    <h4>or, tell us what's on your mind below!</h4>
                <section>
                    <select 
                    name="userMood"
                    onChange={this.handleChange}>
                        <option value="">MOOD</option>
                        <option value="HAPPY">HAPPY</option>
                        <option value="SAD">SAD</option>
                        <option value="EXCITED">EXCITED</option>
                        <option value="ANGRY">ANGRY</option>
                    </select>
                </section>
                <section>
                    <select 
                    name="userVibe"
                    onChange={this.handleChange}>
                        <option value="">VIBE</option>
                        <option value="CHILL">CHILL</option>
                        <option value="PARTY">PARTY</option>
                        <option value="THINK">THINK</option>
                        <option value="LET GO">LET GO</option>
                    </select> 
                </section>
                <section>
                    <select
                    name="userHue"
                    onChange={this.handleChange}>
                        <option value="">VALUE</option>
                        <option value="LIGHT">LIGHT</option>
                        <option value="DARK">DARK</option>
                    </select>
                </section> 
                <section>
                    <input 
                    className="userTextInput"
                    type="text"
                    name="userSentence"
                    placeholder="How's it going???"
                    onChange={this.handleChange}>     
                    </input>
                </section>  
                    <Link to="/pairings">   
                        <button
                        onClick={this.getTone} 
                        type="button"
                        className="submitButton">
                            FIND YOUR PHILOSOPHY
                        </button>
                    </Link>
                    {this.state.isLoaded ? 
                        <Route exact path="/pairings">
                            <Pairings tone={this.state.tone}/>
                        </Route> : null
                    }   
                    
            </form>
            </section>
            </Router>
        )
    }
}

export default DropdownContainer;


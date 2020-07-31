import React, { Component } from "react";
import "./App.css"

class DropdownContainer extends Component {
    constructor() {
        super();
        this.state = {
           userMood: "",
           userVibe: "",
           userHue: "",
        }
    }

     handleChange = (event) => {
        event.preventDefault()
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        // make it so state updates on change
        return (
            <form className="dropdownContainer">
                <select 
                name="userMood"
                onChange={this.handleChange}>
                    <option value="">MOOD</option>
                    <option value="HAPPY">HAPPY</option>
                    <option value="SAD">SAD</option>
                    <option value="EXCITED">EXCITED</option>
                    <option value="ANGRY">ANGRY</option>
                </select>
                <select 
                name="userVibe"
                onChange={this.handleChange}>
                    <option value="">VIBE</option>
                    <option value="CHILL">CHILL</option>
                    <option value="PARTY">PARTY</option>
                    <option value="THINK">THINK</option>
                    <option value="LET GO">LET GO</option>
                </select> 
                <select 
                name="userHue"
                onChange={this.handleChange}>
                    <option value="">Light or Dark</option>
                    <option value="LIGHT">LIGHT</option>
                    <option value="DARK">DARK</option>
                </select>          
            </form>
        )
    }
}

export default DropdownContainer;

/*

import React, {Component} from 'react';
// import '../apiCalls'
import { postShoe } from '../ApiCalls';

class SubmitShoeForm extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            brand: '',
            model: '',
            colorway: '',
            retail_price: 0,
            submitted: false
        }
    }

    postNewShoe = (event) => {
        event.preventDefault();
        const brand = this.state.brand;
        const model = this.state.model;
        const colorway = this.state.colorway;
        const price = this.state.retail_price;
        postShoe(brand, model, colorway, price);
        this.setState({ submitted: true })
    }

    clearInputs = () => {
        this.setState({ 
            id: 0,
            brand: '',
            model: '',
            colorway: '',
            retail_price: 0,
            submitted: false 
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({ submitted: true })
    }



    render() {
        if (!this.state.submitted) {
        return (
        <form onSubmit={this.handleSubmit} className="defineShoeForm">
            
            <input
                className="colorInput"
                name="colorway"
                value={this.state.colorway} 
                onChange={this.handleChange} 
                type='text'
                placeholder='COLOR' required>
            </input>
            <input
                className="price"
                name="retail_price"
                value={this.state.retail_price} 
                onChange={this.handleChange} 
                type='number' min="0" max="1000000"
                placeholder='Price (in dollars)' required>
            </input>
            <input
                className="model"
                name="model"
                value={this.state.model} 
                onChange={this.handleChange} 
                type='text'
                placeholder='MODEL' required>
            </input>
            <button type="submit" onClick={this.postNewShoe} className="submitButton" >
                Submit Sneaker
            </button>
        </form>
        )
        } else {
            return (
                <section>
                    <h2>Submission has been added</h2>
                    <button onClick={this.clearInputs}>Submit another shoe</button> 
                    
                </section>
            )
        }
    }
}

export default SubmitShoeForm;

*/
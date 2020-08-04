import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header'
import Strains from "../Strains"
import DropdownContainer from "../DropdownContainer/DropdownContainer"
import { Route, Switch } from 'react-router-dom';
import { toneChecker } from '../ApiCalls'


class App extends Component {
  constructor() {
    super();
    this.state = {
      userSentence: '',
      // analyzedTone: '',
      // location: ''
    }
  }

  toneRequest = (sentence) => {
    toneChecker(sentence)
  }

  render() {
    return (
      <div className="App">
        <Header />

      </div>
    );
  }
}

export default App;

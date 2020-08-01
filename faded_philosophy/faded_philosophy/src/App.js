import React, {Component} from 'react';
import './App.css';
import Home from './Home'
import { toneChecker } from './ApiCalls'


const aannaSentence = "I feel like the world is too rough, but I'm excited about tomorrow"
const djavan = "Whats up I dont care I done even know what the hell its gonna do"

class App extends Component {
  constructor() {
    super();
    this.state = {
      userStatement: '',
      analyzedTone: '',
    }
  }

  // i want the program to fetch some new data every time it renders

  
toneRequest = () => {
    toneChecker(djavan)
        // this is fourth
    }

conditionsForRendering = (prop) => {
  if (prop) {
    console.log("thirdCall: what do we want to render", prop)
  } else {
    console.log("3.1 if nothing renders") // this happens second
  }
}

componentDidMount = () => {
  console.log(this.toneRequest("", 1)) // this happens first
  this.toneRequest("secondCall: set state", 2) // this is fifth
  if (this.conditionsForRendering()) {
    this.conditionsForRendering("hello there, if something is in state show me what you got!!!")
    this.conditionsForRendering()
  } else {
    console.log("this is call 0 somehow!!!") // this is third
    }
  }


  render() {
    this.toneRequest("", 3)
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;

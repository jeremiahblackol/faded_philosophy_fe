import React, {Component} from 'react';
import './App.css';
import Home from './Home/Home'
import { toneChecker } from './ApiCalls'

const text = "Hello all you good people, I hope you are having a great day!"
const angryText = "I hated all of the dumb shit"
const aannaSentence = "I feel like the world is too rough, but I'm excited about tomorrow"

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
    toneChecker(aannaSentence)
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

import React, {Component} from 'react';
import './App.css';
import Header from './Header';




const text = "Hello all you good people, I hope you are having a great day!"
const angryText = "I hated all of the dumb shit"

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount = () => {
    fetch(`http://localhost:5000/tone/${angryText}`)
      .then(response => response.json())
      .then(data => console.log("data works", data))
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

import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ToneAnalyzerV3 from 'ibm-watson/tone-analyzer/v3';
console.log(ToneAnalyzerV3)
const { IamAuthenticator } = require('ibm-watson/auth')


//this is the tone analyzer
// const toneAnalyzer = new ToneAnalyzerV3({
//     version:"2017–09–21",
//     iam_access_token: "accessToken",
//     authenticator: new IamAuthenticator({
//       apikey: "PPoKBqKpcZ53u-dNBLTNzlEQp_AVmI9t-OrHuCVnEfDP",
//     }),
//     url: "https://api.us-south.tone-analyzer.watson.cloud.ibm.com/instances/dc757d36-9354-45fd-b2ab-2ffe0ffe6858"
// });

const text = "Hello all you good people, I hope you are having a great day!"

// const toneParams = {
//   toneInput: {'text': text},
//   content_type: 'application/json',
// };

// // this is the proxy
// fetch('https://fe-cors-proxy.herokuapp.com', {
//   headers: {
//     "Target-URL": "https://randomfox.ca/floof"
//   }
// })

// const thingy = toneAnalyzer.tone(toneParams)
//     .then(toneAnalysis => {
//         console.log("ananlysis promise", JSON.stringify(toneAnalysis, null, 2));
//     })
//     .catch(err => {
//         console.log('error:', err)
//     });

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount = () => {
    fetch(`http://localhost:5000/tone/${text}`)
      .then(response => response.json())
      .then(data => console.log(data))
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

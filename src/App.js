import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplaySimpson from './components/DisplaySimpson';
import axios from 'axios';

const simpsonsQuote = [
  {
    "quote": "In theory, Communism works! In theory.",
    "character": "Homer Simpson",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    "characterDirection": "Right"
  }
];

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      simpson: " "
    }
    this.getCharacter = this.getCharacter.bind(this);
  }

  getCharacter() {
  
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      
      .then(response => response.data)
      
      .then(data => {
        this.setState({
          simpson: data[0],
        });
    });
  }
  render (){
    return (
      <div className="App">
          <DisplaySimpson simpson={this.state.simpson} />
          <button type="button" onClick={this.getCharacter}>Get character</button>
      </div>
    );
}
}

export default App;

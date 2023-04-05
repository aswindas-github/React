import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'

class App extends Component{
  Hello test
render(){
  return (
    <div className="App">
      <Greet />
      <Welcome />
    </div>
  );
}
}

export default App;

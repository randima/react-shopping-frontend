import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './components/MainPage';
import { SignInPage } from './components/SignInPage';


class App extends Component {
  

  render() {
    return (
     // <div className="App">
        <SignInPage/>      
     // </div>
    );
  }
}
export default App;

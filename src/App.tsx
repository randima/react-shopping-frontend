import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './components/MainPage';
import { SignInPage } from './components/SignInPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {

  render() {
    return (
      // <div className="App">    
      // </div>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} {...this.props}></Route>
          <Route path="/signin/" component={SignInPage} {...this.props}></Route>
        </Switch>          
      </Router>
    );
  }
}
export default App;

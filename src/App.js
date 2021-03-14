import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Portfolio/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default App;

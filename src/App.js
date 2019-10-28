import React, { Component } from 'react';
import './App.css';
import { Banner } from './Banner'
import Header from './Header'
import Register from './Register'
import Detail from './Detail'
import Download from './Download'
import Sponsor from './Sponsor'
import Footer from './Footer'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Register></Register>
        <Detail></Detail>
        <Download></Download>
        <Sponsor></Sponsor>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

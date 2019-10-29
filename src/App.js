import React, { Component } from 'react';
import './App.css';
import { Banner } from './Banner'
import Header from './Header'
import Register from './Register'
import Detail from './Detail'
import Download from './Download'
import Sponsor from './Sponsor'
import Footer from './Footer'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        "navbarItems": [
          {
            "label": "",
            "href": ""
          }
        ],
        "duration": "",
        "detail": "",
        "condition": ""
      }
    }
  }

  async componentWillMount() {
    let result = await axios.get('https://panjs.com/ywc.json')
    this.setState({ data: result.data })
  }

  render() {
    return (
      <div>
        <Header data={this.state.data} />
        <Banner />
        <Register data={this.state.data} />
        <Detail data={this.state.data} />
        <Download />
        <Sponsor />
        <Footer data={this.state.data} />
      </div>
    );
  }
}

export default App;

//Todo: create unit test for each function
import React, { Component } from 'react';
import './App.scss';
import Banner from './Banner/Banner'
import Header from './Header/Header'
import Register from './Register/Register'
import Detail from './Detail/Detail'
import Download from './Download/Download'
import Sponsor from './Sponsor/Sponsor'
import Footer from './Footer/Footer'
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
    let data = this.state.data;
    return (
      <div>
        <Header data={data} />
        <Banner />
        <Register data={data} />
        <Detail data={data} />
        <Download />
        <Sponsor />
        <Footer data={data} />
      </div>
    );
  }
}

export default App;

//Todo: create unit test for each function
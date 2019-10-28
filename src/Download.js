import React, { Component } from 'react';
import './App.css';

class Download extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="box-tat">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4"><a href="tel:021111144"><img src={require("./img/Banner_KTB_SQ.png")} alt='ktb' /></a></div>
              <div className="col-sm-12 col-md-4"><a href="tel:022706400"><img src={require("./img/Banner_CGD_Sq.png")} alt='cgd' /></a></div>
              <div className="col-sm-12 col-md-4"><a href="tel:1672"><img src={require("./img/Banner_TAT_Hotline_Sq.png")} alt='hotline' /></a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Download;

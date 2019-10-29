import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class Sponsor extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="box-ktc">
        <Container>
          <Row className="d-none d-sm-block">
            <div className="d-flex justify-content-around">
              <div className="p2"><a href="https://www.mof.go.th/th/home" ><img src={require("./img/brand-logo/MOF.png")} alt="mof" /></a></div>
              <div className="p2"><a href="http://www.fpo.go.th"><img src={require("./img/brand-logo/FPO.png")} alt="fpo" /></a></div>
              <div className="p2"><a href="https://www.cgd.go.th" ><img src={require("./img/brand-logo/CGD.png")} alt="cgd" /></a></div>
              <div className="p2"><a href="https://www.newcb.ktb.co.th" ><img src={require("./img/brand-logo/Krungthai.png")} alt="ktb" /></a></div>
              <div className="p2"><a href="https://www.mots.go.th" ><img src={require("./img/brand-logo/MOTS.png")} alt="mots" /></a></div>
              <div className="p2"><a href="https://thai.tourismthailand.org" ><img src={require("./img/brand-logo/TAT.png")} alt="tat" /></a></div>
            </div>
          </Row>
          <Row className="d-sm-none">
            <div className="col-4 text-right"><a href="https://www.mof.go.th/th/home" ><img src={require("./img/brand-logo/MOF.png")} alt="mof" /></a></div>
            <div className="col-4 text-center"><a href="http://www.fpo.go.th" ><img src={require("./img/brand-logo/FPO.png")} alt="fpo" /></a></div>
            <div className="col-4 text-left"><a href="https://www.cgd.go.th" ><img src={require("./img/brand-logo/CGD.png")} alt="cgd" /></a></div>
            <div className="col-4 text-right"><a href="https://www.newcb.ktb.co.th" ><img src={require("./img/brand-logo/Krungthai.png")} alt="ktb" /></a></div>
            <div className="col-4 text-center"><a href="https://www.mots.go.th" ><img src={require("./img/brand-logo/MOTS.png")} alt="mots" /></a></div>
            <div className="col-4 text-left"><a href="https://thai.tourismthailand.org" ><img src={require("./img/brand-logo/TAT.png")} alt="tat" /></a></div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Sponsor;

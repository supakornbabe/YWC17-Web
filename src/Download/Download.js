import React, { Component } from 'react';
import './Download.scss';
import { Container, Row, Col } from 'reactstrap';

class Download extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="box-tat">
        <Container>
          <Row>
            <Col sm="12" md="4"><a href="tel:021111144"><img src={require("../Static/img/Banner_KTB_SQ.png")} alt='ktb' /></a></Col>
            <Col sm="12" md="4"><a href="tel:022706400"><img src={require("../Static/img/Banner_CGD_Sq.png")} alt='cgd' /></a></Col>
            <Col sm="12" md="4"><a href="tel:1672"><img src={require("../Static/img/Banner_TAT_Hotline_Sq.png")} alt='hotline' /></a></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Download;

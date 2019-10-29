import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

const Banner = () => {
  return (
    <div className="banner">
      <Row noGutters={true}>
        <Col className="cover-img-1" />

        <Col className="cover-img-2" >
          <Row className="h-100 justify-content-center align-items-center">
            <Col xs="12">
              <div className="logo-box">
                <img src={require("./img/logo/banner.png")} alt="banner" />
              </div>
            </Col>
          </Row>
        </Col>

        <Col className="cover-img-3" />
      </Row>
    </div>
  );
}

export default Banner;
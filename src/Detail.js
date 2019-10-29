import React, { Component } from 'react';
import './App.css';
import DOMPurify from 'dompurify'
import { Container, Row, Col } from 'reactstrap';

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="box-detail">
        <Container>
          <Row>
            <Col md="10" >
              <Row>
                <Col xs="12">
                  <div className="head-title d-none d-sm-block">มาตรการส่งเสริมการบริโภค <br /> ในประเทศ <span className="nowrap">“ชิมช้อปใช้”</span></div>
                  <div className="head-title d-sm-none">มาตรการส่งเสริมการบริโภคในประเทศ <span className="nowrap">“ชิมช้อปใช้”</span></div>
                </Col>
                <Col xs="12" className="mt-4">
                  <div className="detail" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.props.data.detail) }} />
                </Col>
                <Col xs="12" className="mt-4 condition">
                  <div className="title">เงื่อนไขการเข้าร่วมมาตรการ</div>
                  <div className="detail ul mt-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.props.data.condition) }} />
                </Col>
              </Row>
            </Col>
            <Col md="3" lg="8"></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Detail;

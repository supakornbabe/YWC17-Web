import React, { Component } from 'react';
import './Register.scss';
import { Container, Row, Col } from 'reactstrap';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="box-register">
        <Container fluid={true}>
          <Row>
            <Col xs="12">
              <div className="since">ตั้งแต่วันที่</div>
            </Col>
            <Col xs="12">
              <div className="time">{this.props.data.duration}</div>
            </Col>
            <Col xs="12">
              <a href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/" >
                <button className="btn register">ลงทะเบียน เฟส 2<br />
                  ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00<br />
                  (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
                </button>
                <hr />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;

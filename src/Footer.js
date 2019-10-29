import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    console.log(this.props.data)
    return (
      <footer>
        <div className="footer-1" style={{ position: "relative" }}>
          <Container>
            <Row>
              <Col md="3" sm="12"><img className="logo" src={require("./img/logo/footer.png")} alt="Footer" /></Col>
              <Col md="3" sm="4" xs="12">
                <div className="head">ข้อมูลลงทะเบียนประชาชน</div>
                <div className="detail">การรับสิทธิ การใช้งานแอปพลิเคชั่น <span className="nowrap">“เป๋าตัง”</span> และ <span className="nowrap">“ถุงเงิน”</span></div>
                <div className="detail">ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.<a className="ml-1" href="tel:021111144"><span className="nowrap">0 2111 1144</span></a></div>
              </Col>
              <Col md="3" sm="4" xs="12">
                <div className="head">ข้อมูลลงทะเบียนผู้ประกอบการ</div>
                <div className="detail">เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ</div>
                <div className="detail">ติดต่อ โทร.<a className="ml-1" href="tel:022706400"><span className="nowrap">0 2270 6400 กด 7</span></a></div>
              </Col>
              <Col md="3" sm="4" xs="12">
                <div className="head">ข้อมูลเที่ยวชิมช้อปใช้</div>
                <div className="detail">ติดต่อ ททท.</div>
                <div className="detail">โทร<a className="ml-1" href="tel:1672"><span>1672</span></a></div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer-2">
          <Container>
            <Row noGutters={true}>
              <Col sm="12" md="3" lg="3">
                <div className="copyright">Copyright © 2003-2019</div>
              </Col>
              <Row sm="12" md="9" lg="9">
                <ul className="nav col-sm-12">
                  {this.props.data.navbarItems.map(item => {
                    return (
                      <li className="col-sm-4 col-md-4 col-lg-4 nav-item">
                        <a className="nav-link" href={item.href} >
                          {item.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </Row>
            </Row>
          </Container>
        </div>
      </footer>
    );
  }
}

export default Footer;

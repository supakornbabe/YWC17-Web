import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  navBarItemsFooter =
    this.props.data.navbarItems.map(item => {
      return (
        <li
          className="col-sm-4 col-md-4 col-lg-4 nav-item"
        >
          <a
            className="nav-link"
            href={item.href}
          >
            {item.label}
          </a>
        </li>
      )
    })



  render() {
    console.log(this.props.data)
    return (
      <div>
        <footer>
          <div className="footer-1" style={{ position: "relative" }}>
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12"><img className="logo" src={require("./img/logo/footer.png")} alt="Footer" /></div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="head">ข้อมูลลงทะเบียนประชาชน</div>
                  <div className="detail">การรับสิทธิ การใช้งานแอปพลิเคชั่น <span className="nowrap">“เป๋าตัง”</span> และ <span className="nowrap">“ถุงเงิน”</span></div>
                  <div className="detail">ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร.<a className="ml-1" href="tel:021111144"><span className="nowrap">0 2111 1144</span></a></div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="head">ข้อมูลลงทะเบียนผู้ประกอบการ</div>
                  <div className="detail">เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ</div>
                  <div className="detail">ติดต่อ โทร.<a className="ml-1" href="tel:022706400"><span className="nowrap">0 2270 6400 กด 7</span></a></div>
                </div>
                <div className="col-md-3 col-sm-4 col-xs-12">
                  <div className="head">ข้อมูลเที่ยวชิมช้อปใช้</div>
                  <div className="detail">ติดต่อ ททท.</div>
                  <div className="detail">โทร<a className="ml-1" href="tel:1672"><span>1672</span></a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-2">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-sm-12 col-md-3 col-lg-3">
                  <div className="copyright">Copyright © 2003-2019</div>
                </div>
                <div className="row col-sm-12 col-md-9 col-lg-9">
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
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

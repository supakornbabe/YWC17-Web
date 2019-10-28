import React, { Component } from 'react';
import './App.css';

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="box-register">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="since">ตั้งแต่วันที่</div>
              </div>
              <div className="col-12">
                <div className="time">{this.props.data.duration}</div>
              </div>
              <div className="col-12"><a href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/" >
                <button className="btn register">คงเหลือสิทธิลงทะเบียน เฟส 2<br />
                  สำหรับวันที่ 28 ตุลาคม 2562<br />
                  รอบเวลา 6.00 น. จำนวน 68,796 คน<br />
                  รอบเวลา 18.00 น. จำนวน 68,796 คน</button>
                <hr /></a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

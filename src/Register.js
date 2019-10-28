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
                <div className="since">ตั้งแต่วันที่ hhhh</div>
              </div>
              <div className="col-12">
                <div className="time">{this.props.data.duration}</div>
              </div>
              <div className="col-12"><a href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/" >
                <button className="btn register">ลงทะเบียน เฟส 2<br />
                  ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00<br />
                  (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
                  </button>
                <hr /></a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

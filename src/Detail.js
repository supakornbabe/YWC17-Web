import React, { Component } from 'react';
import './App.css';

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="box-detail">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <div className="row">
                  <div className="col-12">
                    <div className="head-title d-none d-sm-block">มาตรการส่งเสริมการบริโภค <br /> ในประเทศ <span className="nowrap">“ชิมช้อปใช้”</span></div>
                    <div className="head-title d-sm-none">มาตรการส่งเสริมการบริโภคในประเทศ <span className="nowrap">“ชิมช้อปใช้”</span></div>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="detail">ผู้สนใจเข้าร่วมมาตรการส่งเสริมการบริโภคในประเทศ <span className="nowrap">“ชิมช้อปใช้”</span> รับเงินผ่าน <span className="nowrap">“เป๋าตัง”</span> <span className="nowrap">(G-Wallet)</span> รวมจำนวน 13 ล้านคน  ลงทะเบียนรับสิทธิ ได้ทางเว็บไซต์ <span className="nowrap">www.ชิมช้อปใช้.com</span> <br /> ตั้งแต่วันที่ 23 กันยายน  - 15 พฤศจิกายน 2562 (รับลงทะเบียน เฟส 2 ตั้งแต่วันที่ 24 ตุลาคม 2562 จำกัดจำนวนผู้ลงทะเบียน 1 ล้านคนต่อวัน จนกว่าจะครบ 3 ล้านคน)</div>
                  </div>
                  <div className="col-12 condition mt-4">
                    <div className="title">เงื่อนไขการเข้าร่วมมาตรการ</div>
                    <div className="detail ul mt-2">
                      1. เป็นบุคคลสัญชาติไทย มีบัตรประจำตัวประชาชน<br />
                      2. มีอายุตั้งแต่ 18 ปีบริบูรณ์ขึ้นไป ณ วันที่ลงทะเบียน<br />
                      3. มีโทรศัพท์มือถือสมาร์ทโฟนที่สามารถเชื่อมต่อสัญญาณอินเทอร์เน็ตและมีอีเมล
                </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;

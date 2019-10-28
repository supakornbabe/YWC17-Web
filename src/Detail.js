import React, { Component } from 'react';
import './App.css';
import DOMPurify from 'dompurify'

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
                    <div className="detail" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.props.data.detail) }}></div>
                  </div>
                  <div className="col-12 condition mt-4">
                    <div className="title">เงื่อนไขการเข้าร่วมมาตรการ</div>
                    <div className="detail ul mt-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.props.data.condition) }}>
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

import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  triggerAnimation = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div>
        <header>


          <div className="header-link-mobile">
            <nav className="navbar navbar-light amber lighten-4">

              <a className="navbar-brand" href="/">
                <img src={require("./img/logo/footer.png")} alt="logo"></img>
              </a>

              <button className="navbar-toggler first-button"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent20"
                aria-controls="navbarSupportedContent20"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={this.triggerAnimation}
              >
                <div className={this.state.isOpen ? "animated-icon1 open" : "animated-icon1"}>
                  <span />
                  <span />
                  <span />
                </div>

              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent20">

                <ul className="navbar-nav mr-auto">
                  {this.props.data.navbarItems.map(item => {
                    return (
                      <li className="nav-item"><a className="nav-link" href={item.href} >{item.label}</a></li>
                    )
                  })}
                </ul>

              </div>

            </nav>

          </div>




          {/* <Container>
            <Row>
              <Col xs={12}>
                <ul className="header-links">
                  <li><a href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/" >ลงทะเบียนเข้าร่วมมาตรการ</a></li>
                  <li><a href="https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register" >ขั้นตอนการเข้าร่วม</a></li>
                  <li><a href="https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province" >ร้านค้าที่เข้าร่วม</a></li>
                </ul>
              </Col>
            </Row>
          </Container> */}


          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <ul className="header-links">
                  {this.props.data.navbarItems.map(item => {
                    return (
                      <li><a href={item.href} >{item.label}</a></li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </header>



      </div>
    );
  }
}

export default Header;

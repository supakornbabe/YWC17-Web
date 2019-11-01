import React, { Component } from 'react';
import './Header.scss';
import { Container, Row, Col } from 'reactstrap';

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
      <header>
        <div className="header-link-mobile">
          <nav className="navbar navbar-light amber lighten-4">
            <a className="navbar-brand" href="/">
              <img src={require("../Static/img/logo/footer.png")} alt="logo"></img>
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

        <Container fluid={true}>
          <Row>
            <Col >
              <ul className="header-links">
                {this.props.data.navbarItems.map(item => {
                  return (
                    <li><a href={item.href} >{item.label}</a></li>
                  )
                })}
              </ul>
            </Col>
          </Row>
        </Container>

      </header>
    );
  }
}

export default Header;

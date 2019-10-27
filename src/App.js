import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
function App() {
  return (
    <div>
      <header>
        {/* <div class="header-link-mobile">
          <nav class="navbar navbar-light amber lighten-4">
            <a class="navbar-brand" href="#"><img src="./img/logo/footer.png" /></a>
            <button class="navbar-toggler first-button collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20" aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
              <div class="animated-icon1"><span></span><span></span><span></span></div>
            </button>
            <div class="navbar-collapse collapse" id="navbarSupportedContent20" style="">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item"><a class="nav-link" href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/" target="_blank">ลงทะเบียนเข้าร่วมมาตรการ</a></li>
                <li class="nav-item"><a class="nav-link" href="https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register" target="_blank">ขั้นตอนการเข้าร่วม</a></li>
                <li class="nav-item"><a class="nav-link" href="https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province" target="_blank">ร้านค้าที่เข้าร่วม</a></li>
              </ul>
            </div>
          </nav>
        </div> */}
        {/* <nav class="navbar navbar-light amber lighten-4">

          <a class="navbar-brand" href="#">Navbar</a>

          <button class="navbar-toggler first-button collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
            aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
            <div class="animated-icon1"><span></span><span></span><span></span></div>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent20">

            <ul class="navbar-nav mr-auto">
              <li class="nav-item"><a class="nav-link" href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/" target="_blank">ลงทะเบียนเข้าร่วมมาตรการ</a></li>
              <li class="nav-item"><a class="nav-link" href="https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register" target="_blank">ขั้นตอนการเข้าร่วม</a></li>
              <li class="nav-item"><a class="nav-link" href="https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province" target="_blank">ร้านค้าที่เข้าร่วม</a></li>
            </ul>

          </div>

        </nav> */}
        <Container>
          <Row>
            <Col sm={12}>
              <ul class="header-links">
                <li><a href="https://regist.xn--b3caa1e2a7e2b0h2be.com/Register/" >ลงทะเบียนเข้าร่วมมาตรการ</a></li>
                <li><a href="https://www2.xn--b3caa1e2a7e2b0h2be.com/howto-register" >ขั้นตอนการเข้าร่วม</a></li>
                <li><a href="https://www2.xn--b3caa1e2a7e2b0h2be.com/thung-ngern-shop-province" >ร้านค้าที่เข้าร่วม</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </header>

    </div>
  );
}

export default App;

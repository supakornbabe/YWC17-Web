import React from 'react';
import './App.css';

export const Banner = () => {
  return (

    <div className="banner">
      <div className="row no-gutters">
        <div className="col-4 cover-img-1"></div>
        <div className="col-4 cover-img-2">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-12">
              <div className="logo-box">
                <img src={require("./img/logo/banner.png")} alt="banner" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 cover-img-3"></div>
      </div>
    </div>

  );
}
import React, { Component } from "react";
import "../styles/main-display.css";
import Sweater from "../img/sweater.png";

class MainDisplay extends Component {
  render() {
    return (
      <div>
        <h1 className="category-name">Category name</h1>
        <div className="grid-container">
          <div className="card">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
            <div className="container">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
          </div>
          <div className="card">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
            <div className="container">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
          </div>
          <div className="card">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
            <div className="container">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
          </div>
          <div className="card">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
            <div className="container">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
          </div>
          <div className="card">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
            <div className="container">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
          </div>
          <div className="card">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
            <div className="container">
              <p>Apollo running short</p>
              <b>$50.00</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainDisplay;

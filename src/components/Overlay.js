import React, { Component } from "react";
import "../styles/overlay.css";

export default class Overlay extends Component {
  render() {
    const { active } = this.props;

    return (
      <div className={active ? "grey-overlay" : "grey-overlay-inactive"}>
        {this.props.children}
      </div>
    );
  }
}

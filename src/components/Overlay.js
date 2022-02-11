import React, { Component } from "react";
import "../styles/overlay.css";
import PropTypes from "prop-types";

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

Overlay.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.element,
};

Overlay.defaultProps = {
  active: false,
  children: null,
};

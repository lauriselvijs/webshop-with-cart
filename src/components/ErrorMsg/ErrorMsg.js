import React, { Component } from "react";
import "../../styles/error-msg/error-msg.css";
import PropTypes from "prop-types";

export default class ErrorMsg extends Component {
  render() {
    const { className, errorMsg } = this.props;

    return <div className={className}>{errorMsg}</div>;
  }
}

ErrorMsg.propTypes = {
  className: PropTypes.string,
  errorMsg: PropTypes.string,
};

ErrorMsg.defaultProps = {
  className: "error-msg",
  errorMsg: "Server error",
};

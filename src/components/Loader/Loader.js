import React, { Component } from "react";
import "../../styles/loader/loader.css";
import PropTypes from "prop-types";

export default class Loader extends Component {
  render() {
    const { className } = this.props;

    return <div className={className}></div>;
  }
}

Loader.propTypes = {
  className: PropTypes.string,
};

Loader.defaultProps = {
  className: "loader",
};

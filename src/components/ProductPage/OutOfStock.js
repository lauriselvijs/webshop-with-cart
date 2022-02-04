import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/product-page/out-of-stock.css";

export default class OutOfStock extends Component {
  render() {
    const { className } = this.props;

    return <div className={className}>OUT OF STOCK</div>;
  }
}

OutOfStock.propTypes = {
  className: PropTypes.string,
};

OutOfStock.defaultProps = {
  className: "out-of-stock",
};

import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./ProductFilter.style.scss";

export class ProductFilter extends Component {
  static propTypes = {
    categories: PropTypes.shape({
      selectedCategory: PropTypes.string,
    }),
  };

  static defaultProps = {
    category: "all",
  };

  render() {
    // const { categories } = this.props;

    return <div className="product-filter">ProductFilter</div>;
  }
}

const mapState = (state) => ({
  categories: state.categories,
});

export default connect(mapState, null)(ProductFilter);

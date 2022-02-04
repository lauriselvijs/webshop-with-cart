import React, { Component } from "react";
import { connect } from "react-redux";
import "../../styles/categories/category-name.css";
import PropTypes from "prop-types";

export class CategoryName extends Component {
  render() {
    const { selectedCategory } = this.props.categories;

    return <h1 className="category-name">{selectedCategory.toUpperCase()}</h1>;
  }
}

CategoryName.propTypes = {
  selectedCategory: PropTypes.string,
};

CategoryName.defaultProps = {
  selectedCategory: "All",
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(CategoryName);
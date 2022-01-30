import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItem from "./CategoryItem";
import "../../styles/categories/categories.css";
import {
  setCategory,
  setCurrentSelectedCategory,
} from "../../state/actions/categoriesActions";

export class Categories extends Component {
  render() {
    const { categories } = this.props.categories;

    return (
      <>
        {categories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {
  setCategory,
  setCurrentSelectedCategory,
})(Categories);

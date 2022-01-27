import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCategories,
  setCategory,
} from "../../state/actions/categoriesActions";
import "../../styles/categories/category-item.css";
import { capitalizeFirstLetter } from "../utils/stringUtils";

export class CategoryItem extends Component {
  linkClick(category) {
    setCategory(category);
  }

  render() {
    const { category } = this.props;

    let categorySelectedClass = "category";

    if (category.selected) {
      categorySelectedClass = "category-selected";
    } else {
      categorySelectedClass = "category";
    }

    return (
      <a
        href={`#${category.categoryName.toLowerCase()}`}
        onClick={this.linkClick.bind(this, category.categoryName)}
        className={categorySelectedClass}
      >
        {capitalizeFirstLetter(category.categoryName)}
      </a>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {
  getCategories,
  setCategory,
})(CategoryItem);

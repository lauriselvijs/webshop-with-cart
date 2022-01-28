import React, { Component } from "react";
import "../../styles/categories/category-item.css";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import { Link } from "react-router-dom";

export default class CategoryItem extends Component {
  render() {
    const { category, selectCategory } = this.props;

    let categorySelectedClass = "category";

    if (category.selected) {
      categorySelectedClass = "category-selected";
    } else {
      categorySelectedClass = "category";
    }

    return (
      <Link
        to={`${category.categoryName.toLowerCase()}`}
        onClick={selectCategory}
        className={categorySelectedClass}
      >
        {capitalizeFirstLetter(category.categoryName)}
      </Link>
    );
  }
}

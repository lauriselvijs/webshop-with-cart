import React, { Component } from "react";
import "../../styles/categories/category-item.css";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  setCategory,
  setCurrentSelectedCategory,
} from "../../state/actions/categoriesActions";

export class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.selectCategory = this.selectCategory.bind(this);

    this.state = {};
  }

  selectCategory(category) {
    this.props.setCategory(category);
    this.props.setCurrentSelectedCategory();
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
      <Link
        to={`${category.categoryName.toLowerCase()}`}
        onClick={this.selectCategory.bind(this, category.categoryName)}
        className={categorySelectedClass}
      >
        {capitalizeFirstLetter(category.categoryName)}
      </Link>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {
  setCategory,
  setCurrentSelectedCategory,
})(CategoryItem);

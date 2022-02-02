import React, { Component } from "react";
import "../../styles/categories/category-item.css";
import { capitalizeFirstLetter } from "../utils/stringUtils";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentSelectedCategory } from "../../state/actions/categoriesActions";

export class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.selectCategory = this.selectCategory.bind(this);

    this.state = {};
  }

  selectCategory(category) {
    this.props.setCurrentSelectedCategory(category);
  }

  render() {
    const { category } = this.props;
    const { selectedCategory } = this.props.categories;

    let categorySelectedClass = "category";

    if (category.name === selectedCategory) {
      categorySelectedClass = "category-selected";
    } else {
      categorySelectedClass = "category";
    }

    return (
      <Link
        to={`${category.name.toLowerCase()}`}
        onClick={this.selectCategory.bind(this, category.name)}
        className={categorySelectedClass}
      >
        {capitalizeFirstLetter(category.name)}
      </Link>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {
  setCurrentSelectedCategory,
})(CategoryItem);

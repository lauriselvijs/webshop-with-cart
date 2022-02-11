import React, { Component } from "react";
import "../../styles/categories/category-item.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentSelectedCategory } from "../../state/actions/categoriesActions";
import PropTypes from "prop-types";

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
        {category.name.toUpperCase()}
      </Link>
    );
  }
}

CategoryItem.propTypes = {
  categories: PropTypes.shape({
    selectedCategory: PropTypes.string,
  }),
  category: PropTypes.object,
  setCurrentSelectedCategory: PropTypes.func,
};

CategoryItem.defaultProps = {
  categories: {
    selectCategory: "All",
  },
  category: {},
  selectedCategory: "All",
  setCurrentSelectedCategory: () => {},
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {
  setCurrentSelectedCategory,
})(CategoryItem);

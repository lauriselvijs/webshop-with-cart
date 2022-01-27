import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItem from "./CategoryItem";
import "../../styles/categories/categories.css";
import { setCategory } from "../../state/actions/categoriesActions";

export class Categories extends Component {
  constructor(props) {
    super(props);

    this.selectCategory = this.selectCategory.bind(this);

    this.state = {};
  }

  selectCategory(category) {
    this.props.setCategory(category);
  }

  render() {
    const { categories } = this.props.categories;

    return (
      <>
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            category={category}
            selectCategory={this.selectCategory.bind(
              this,
              category.categoryName
            )}
          />
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, { setCategory })(Categories);

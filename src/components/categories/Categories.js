import React, { Component } from "react";
import { connect } from "react-redux";
import CategoryItem from "./CategoryItem";
import "../../styles/categories/categories.css";
import { setCurrentSelectedCategory } from "../../state/actions/categoriesActions";
import gql from "graphql-tag";
import { Query } from "@apollo/client/react/components";

const CATEGORY_QUERY = gql`
  query {
    categories {
      name
    }
  }
`;

export class Categories extends Component {
  render() {
    return (
      <Query query={CATEGORY_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          return (
            <>
              {data.categories.map((category, index) => (
                <CategoryItem key={index} category={category} />
              ))}
            </>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {
  setCurrentSelectedCategory,
})(Categories);

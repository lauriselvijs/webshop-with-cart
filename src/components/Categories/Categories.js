import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import "../../styles/categories/categories.css";
import gql from "graphql-tag";
import { Query } from "@apollo/client/react/components";
import Loader from "../Loader";
import PropTypes from "prop-types";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

const CATEGORY_QUERY = gql`
  query {
    categories {
      name
    }
  }
`;

export default class Categories extends Component {
  render() {
    return (
      <Query query={CATEGORY_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <ErrorMsg errorMsg={"Cant find categories"} />;

          const { categories } = data;

          return (
            <>
              {categories.map((category, index) => (
                <CategoryItem key={index} category={category} />
              ))}
            </>
          );
        }}
      </Query>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array,
};

Categories.defaultProps = {
  categories: [],
};

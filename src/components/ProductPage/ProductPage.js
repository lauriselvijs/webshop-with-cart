import React, { Component } from "react";
import "../../styles/product-page/product-page.css";
import { connect } from "react-redux";
import ProductPageSingle from "./ProductPageSingle";
import gql from "graphql-tag";
import { Query } from "@apollo/client/react/components";
import Loader from "../Loader";
import PropTypes from "prop-types";

const PRODUCTS_QUERY = gql`
  query ProductsQuery($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        name
        inStock
        gallery
        brand
        attributes {
          type
          name
          items {
            displayValue
            value
          }
        }
        prices {
          currency {
            label
          }
          amount
        }
      }
    }
  }
`;

export class ProductPage extends Component {
  render() {
    const { selectedCategory } = this.props.categories;

    return (
      <Query query={PRODUCTS_QUERY} variables={{ title: selectedCategory }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) console.log(error);

          const { products } = data.category;
          return (
            <div className="grid-container">
              {products.map((product, index) => (
                <ProductPageSingle key={index} product={product} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

ProductPage.propTypes = {
  selectedCategory: PropTypes.string,
  products: PropTypes.array,
};

ProductPage.defaultProps = {
  selectedCategory: "All",
  products: [],
};

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(ProductPage);

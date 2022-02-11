import React, { Component } from "react";
import "../../styles/product-page/product-page.css";
import { connect } from "react-redux";
import ProductPageSingle from "./ProductPageSingle";
import gql from "graphql-tag";
import { Query } from "@apollo/client/react/components";
import Loader from "../Loader";
import PropTypes from "prop-types";
import { setCurrentSelectedCategory } from "../../state/actions/categoriesActions";
import ErrorMsg from "../ErrorMsg/ErrorMsg";

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
  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.props.setCurrentSelectedCategory(this.props.category);
    }
  }
  render() {
    const { category } = this.props;

    return (
      <Query query={PRODUCTS_QUERY} variables={{ title: category }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader className="product-page-loader" />;
          if (error) return <ErrorMsg errorMsg={"Cant find products"} />;

          const { products } = data.category;
          return (
            <div className="product-page-grid-container">
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
  category: PropTypes.string,
  setCurrentSelectedCategory: PropTypes.func,
};

ProductPage.defaultProps = {
  category: "All",
  setCurrentSelectedCategory: () => {},
};

export default connect(null, { setCurrentSelectedCategory })(ProductPage);

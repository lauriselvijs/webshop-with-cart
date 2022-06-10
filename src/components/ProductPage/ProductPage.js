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
import ProductFilter from "../ProductFilter";
import { withRouterHOC } from "../../helpers/routerHOC";
import { compose } from "redux";
import { urlQueryToArr } from "../../utils/formatUtils";
import { filterProducts } from "../../utils/reduceUtils";

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
    const urlQuery = this.props.location.search.substring(1);
    const urlQueryArr = urlQueryToArr(urlQuery);

    return (
      <Query query={PRODUCTS_QUERY} variables={{ title: category }}>
        {({ loading, error, data }) => {
          if (loading) return <Loader className="product-page-loader" />;
          if (error) return <ErrorMsg errorMsg={"Cant find products"} />;

          const { products } = data.category;

          const attributes = products
            .map(({ attributes }) => attributes)
            .flat();

          const filteredProducts = filterProducts(products, urlQueryArr);

          return (
            <div className="product-page-grid-container">
              <ProductFilter attributes={attributes} category={category} />
              {(filteredProducts.length !== 0
                ? filteredProducts
                : products
              ).map((product, index) => (
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
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

ProductPage.defaultProps = {
  category: "All",
  setCurrentSelectedCategory: () => {},
};

export default compose(
  withRouterHOC,
  connect(null, { setCurrentSelectedCategory })
)(ProductPage);

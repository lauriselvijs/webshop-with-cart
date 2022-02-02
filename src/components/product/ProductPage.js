import React, { Component } from "react";
import "../../styles/product/product-page.css";
import { connect } from "react-redux";
import ProductPageSingle from "./ProductPageSingle";
import gql from "graphql-tag";
import { Query } from "@apollo/client/react/components";

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
          items {
            displayValue
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
  constructor(props) {
    super(props);
    this.onCategoryNameChange = this.onCategoryNameChange.bind(this);

    this.state = {};
  }

  onCategoryNameChange() {
    this.setState({ hover: false });
  }

  componentDidMount() {}

  render() {
    const { selectedCategory } = this.props.categories;

    return (
      <Query query={PRODUCTS_QUERY} variables={{ title: selectedCategory }}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) console.log(error);
          return (
            <div className="grid-container">
              {data.category.products.map((product, index) => (
                <ProductPageSingle key={index} product={product} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, {})(ProductPage);

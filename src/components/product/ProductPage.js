import React, { Component } from "react";
import "../../styles/product/product-page.css";
import { connect } from "react-redux";
import { getClothes } from "../../state/actions/clothesActions";
import ProductPageSingle from "./ProductPageSingle";
import gql from "graphql-tag";
import { Query } from "@apollo/client/react/components";

const PRODUCT_QUERY = gql`
  query ProductQuery($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
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

  componentDidMount() {
    this.props.getClothes();
  }

  render() {
    const { clothes } = this.props.clothes;
    return (
      <>
        <div className="grid-container">
          {clothes.map((item, index) => (
            <ProductPageSingle key={index} item={item} />
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  clothes: state.clothes,
});

export default connect(mapStateToProps, {
  getClothes,
})(ProductPage);

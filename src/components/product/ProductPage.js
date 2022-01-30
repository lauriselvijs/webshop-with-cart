import React, { Component } from "react";
import "../../styles/main-display.css";
import LoadingOverlay from "react-loading-overlay";
import { connect } from "react-redux";
import { getClothes } from "../../state/actions/clothesActions";
import ProductPageSingle from "./ProductPageSingle";

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
        <LoadingOverlay active={false} className="main-display">
          <div className="grid-container">
            {clothes.map((item, index) => (
              <ProductPageSingle key={index} item={item} />
            ))}
          </div>
        </LoadingOverlay>
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

import React, { Component } from "react";
import "../styles/main-display.css";
import ProductViewSingle from "../components/ProductViewSingle";
import LoadingOverlay from "react-loading-overlay";

class MainDisplay extends Component {
  constructor(props) {
    super(props);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.onCategoryNameChange = this.onCategoryNameChange.bind(this);

    this.state = {
      hover: false,
      addedToCart: false,
      category: "WOMEN",
    };
  }

  mouseOver = () => {
    this.setState({ hover: true });
  };

  mouseOut() {
    this.setState({ hover: false });
  }

  onCategoryNameChange() {
    this.setState({ hover: false });
  }

  addedToCart() {
    // add to cart
  }

  render() {
    const { category } = this.state;

    return (
      <>
        <LoadingOverlay active={false} className="main-display">
          <h1 className="category-name">{category}</h1>
          <div className="grid-container">
            <ProductViewSingle
              hover={this.state.hover}
              onMouseOver={this.mouseOver.bind(this)}
              onMouseOut={this.mouseOut.bind(this)}
              addedToCart={this.addedToCart.bind(this)}
            />
          </div>
        </LoadingOverlay>
      </>
    );
  }
}

export default MainDisplay;

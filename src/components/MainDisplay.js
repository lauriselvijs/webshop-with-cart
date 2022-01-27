import React, { Component } from "react";
import "../styles/main-display.css";
import ProductViewSingle from "../components/ProductViewSingle";
import LoadingOverlay from "react-loading-overlay";
import { connect } from "react-redux";
import { getClothes } from "../state/actions/clothesActions";

export class MainDisplay extends Component {
  constructor(props) {
    super(props);
    this.onCategoryNameChange = this.onCategoryNameChange.bind(this);

    this.state = {
      category: "WOMEN",
    };
  }

  onCategoryNameChange() {
    this.setState({ hover: false });
  }

  componentDidMount() {
    this.props.getClothes();
  }

  render() {
    const { category } = this.state;
    const { clothes } = this.props.clothes;

    return (
      <>
        <LoadingOverlay active={false} className="main-display">
          <h1 className="category-name">{category}</h1>
          <div className="grid-container">
            {clothes.map((item, index) => (
              <ProductViewSingle key={index} item={item} />
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
})(MainDisplay);

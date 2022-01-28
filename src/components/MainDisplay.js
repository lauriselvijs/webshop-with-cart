import React, { Component } from "react";
import "../styles/main-display.css";
import LoadingOverlay from "react-loading-overlay";
import { connect } from "react-redux";
import { getClothes } from "../state/actions/clothesActions";
import ClothesPage from "../components/categories/clothes/ClothesPage";

export class MainDisplay extends Component {
  render() {
    return (
      <>
        <ClothesPage />
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

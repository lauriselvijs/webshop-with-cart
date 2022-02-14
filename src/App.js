import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import CategoryName from "./components/Categories/CategoryName";
import ProductView from "./components/ProductView/ProductView";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import PropTypes from "prop-types";

export class App extends Component {
  render() {
    const { selectedCategory } = this.props.categories;
    const { cartOpen } = this.props.cart;

    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <Navigate to={`/${selectedCategory}`} />
                </>
              }
            ></Route>
            <Route
              path={"/all"}
              element={
                <>
                  <LoadingOverlay active={cartOpen} className="loading-overlay">
                    <CategoryName />
                    <ProductPage category="all" />
                  </LoadingOverlay>
                </>
              }
            ></Route>
            <Route
              path={"/clothes"}
              element={
                <>
                  <LoadingOverlay active={cartOpen} className="loading-overlay">
                    <CategoryName />
                    <ProductPage category="clothes" />
                  </LoadingOverlay>
                </>
              }
            ></Route>
            <Route
              path={"/tech"}
              element={
                <>
                  <LoadingOverlay active={cartOpen} className="loading-overlay">
                    <CategoryName />
                    <ProductPage category="tech" />
                  </LoadingOverlay>
                </>
              }
            ></Route>
            <Route
              path={`/${selectedCategory}/:id`}
              element={
                <>
                  <LoadingOverlay active={cartOpen} className="loading-overlay">
                    <ProductView />
                  </LoadingOverlay>
                </>
              }
            ></Route>
            <Route
              path="shopping-cart"
              element={
                <>
                  <LoadingOverlay
                    active={cartOpen}
                    className="loading-overlay-shopping-cart"
                  >
                    <ShoppingCart />
                  </LoadingOverlay>
                </>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

App.propTypes = {
  categories: PropTypes.shape({
    selectedCategory: PropTypes.string,
  }),
  cart: PropTypes.shape({
    cartOpen: PropTypes.bool,
  }),
};

App.defaultProps = {
  categories: { selectedCategory: "All" },
  cart: { cartOpen: false },
};

const mapStateToProps = (state) => ({
  categories: state.categories,
  cart: state.cart,
});

export default connect(mapStateToProps, null)(App);

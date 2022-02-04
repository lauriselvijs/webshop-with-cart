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
import ProductView from "./components/ProductVIew/ProductView";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";

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
                <>{selectedCategory === "all" && <Navigate to="/all" />}</>
              }
            ></Route>
            <Route
              path={`/${selectedCategory}`}
              element={
                <>
                  <LoadingOverlay active={cartOpen} className="loading-overlay">
                    <CategoryName />
                    <ProductPage />
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
                  <LoadingOverlay active={cartOpen} className="loading-overlay">
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

const mapStateToProps = (state) => ({
  categories: state.categories,
  cart: state.cart,
});

export default connect(mapStateToProps, null)(App);

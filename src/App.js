import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ProductPage from "./components/product/ProductPage";
import CategoryName from "./components/categories/CategoryName";
import ProductView from "./components/product/ProductView";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import { connect } from "react-redux";

export class App extends Component {
  render() {
    const { selectedCategory } = this.props.categories;

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
                  <CategoryName />
                  <ProductPage />
                </>
              }
            ></Route>
            <Route
              path={`/${selectedCategory}/:id`}
              element={<ProductView />}
            ></Route>
            <Route path="shopping-cart" element={<ShoppingCart />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
});

export default connect(mapStateToProps, null)(App);

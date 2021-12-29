import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import MainDisplayMen from "./components/MainDisplayMen";
import ShoppingCartModal from "./components/ShoppingCartModal";
import ProductView from "./components/ProductView";
import ShoppingCart from "./components/ShoppingCart";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/*     <MainDisplay />
        <ShoppingCartModal /> 
        <ProductView />
         <ShoppingCart />*/}
        <ProductView />
      </div>
    );
  }
}

export default App;

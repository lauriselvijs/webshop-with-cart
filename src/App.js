import React, { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import MainDisplay from "./components/MainDisplay";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ClothesPage from "./components/categories/clothes/ClothesPage";
import TechPage from "./components/categories/tech/TechPage";
import CategoryName from "./components/categories/CategoryName";
import ClothesView from "./components/categories/clothes/ClothesView";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <CategoryName />
                  <MainDisplay />
                </>
              }
            ></Route>
            <Route
              path="/all"
              element={
                <>
                  <CategoryName />
                  <MainDisplay />
                </>
              }
            ></Route>
            <Route
              path="/clothes"
              element={
                <>
                  <CategoryName />
                  <ClothesPage />
                </>
              }
            ></Route>
            <Route path="/clothes/:id" element={<ClothesView />}></Route>
            <Route
              path="/tech"
              element={
                <>
                  <CategoryName />
                  <TechPage />
                </>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "../../../styles/product-view.css";
import { withRouter } from "../../helpers/routerHOC";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  setHover,
  getClothesItemById,
} from "../../../state/actions/clothesActions";
import { setLoading } from "../../../state/actions/loadingActions";
import { addItem } from "../../../state/actions/cartActions";
import { selectClothesBySize } from "../../../state/actions/clothesActions";

import SizeBtn from "../../buttons/SizeBtn";

class ClothesView extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.selectButton = this.selectButton.bind(this);

    this.state = {};
  }

  componentDidMount() {
    this.props.setLoading(true);
    const id = this.props.match.params.id;
    this.props.getClothesItemById(id);
    this.props.setLoading(false);
  }

  addToCart() {
    this.setState({ added_to_cart: !this.state.added_to_cart });
    console.log("added to card");
  }

  selectButton(size) {
    this.props.selectClothesBySize(size);
  }

  render() {
    const { clothesItem } = this.props.clothes;
    const { loading } = this.props.loading;

    return (
      <div className="parent">
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            <div className="thumbnail-1">
              <img
                src={clothesItem.img}
                alt="product"
                style={{ width: "20%" }}
              />
            </div>
            <div className="thumbnail-2">
              <img
                src={clothesItem.img}
                alt="product"
                style={{ width: "20%" }}
              />
            </div>
            <div className="thumbnail-3">
              <img
                src={clothesItem.img}
                alt="product"
                style={{ width: "20%" }}
              />
            </div>
            <div className="white-space"> </div>
            <div className="main-image">
              <img
                src={clothesItem.img}
                alt="product"
                style={{ width: "100%" }}
              />
            </div>
            <div className="product-name">
              <h2>{clothesItem.name}</h2>
              <h4>SIZE:</h4>
            </div>
            <div className="size">
              {clothesItem.sizes.map((size, index) => (
                <SizeBtn
                  key={index}
                  size={size}
                  selectButton={this.selectButton.bind(this, size)}
                  selectedSize={clothesItem.selectedSize}
                />
              ))}
            </div>
            <div className="price">
              <h4>PRICE:</h4>
              <h4>${clothesItem.price}</h4>
            </div>
            <div className="add-to-cart-section">
              <button
                className="add-to-cart"
                onClick={this.addToCart.bind(this)}
              >
                ADD TO CART
              </button>
            </div>
            <div className="info">
              <p>{clothesItem.desc}</p>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  clothes: state.clothes,
  loading: state.loading,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    setHover,
    addItem,
    getClothesItemById,
    setLoading,
    selectClothesBySize,
  })
)(ClothesView);

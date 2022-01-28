import React, { Component } from "react";
import BuyCart from "../../../img/buy_cart.png";
import "../../../styles/product-view-single.css";
import { connect } from "react-redux";
import {
  setHover,
  selectClothesBySize,
} from "../../../state/actions/clothesActions";
import { addItem } from "../../../state/actions/cartActions";
import { Link } from "react-router-dom";

export class ClothesViewSingle extends Component {
  constructor(props) {
    super(props);
    this.addedToCart = this.addedToCart.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);

    this.state = {};
  }

  addedToCart(item, id) {
    this.props.addItem(item, id);
  }

  mouseOver = (id) => {
    this.props.setHover(id, true);
  };

  mouseOut(id) {
    this.props.setHover(id, false);
  }

  render() {
    const { item } = this.props;
    return (
      <Link className="clothes-page-single-link" to={`/clothes/${item.id}`}>
        <div
          className="card"
          onMouseOver={this.mouseOver.bind(this, item.id)}
          onMouseOut={this.mouseOut.bind(this, item.id)}
        >
          <img
            src={item.img}
            alt="product"
            className="product-image"
            style={{ width: "100%" }}
          />
          {item.hover ? (
            <img
              src={BuyCart}
              alt="product-cart"
              className="product-cart"
              style={{ width: "15%" }}
              onClick={this.addedToCart.bind(this, item, item.id)}
            />
          ) : null}
          <div className="container">
            <p>{item.name}</p>
            <b>${item.price}</b>
          </div>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = (state) => ({
  clothes: state.clothes,
});

export default connect(mapStateToProps, {
  setHover,
  addItem,
  selectClothesBySize,
})(ClothesViewSingle);

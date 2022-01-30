import React, { Component } from "react";
import BuyCart from "../../img/buy_cart.png";
import "../../styles/product-view-single.css";
import { connect } from "react-redux";
import { selectClothesBySize } from "../../state/actions/clothesActions";
import { addItem } from "../../state/actions/cartActions";
import { Link } from "react-router-dom";

export class ProductPageSingle extends Component {
  constructor(props) {
    super(props);
    this.addedToCart = this.addedToCart.bind(this);
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    this.mouseOverCartBtn = this.mouseOverCartBtn.bind(this);
    this.mouseOutCartBtn = this.mouseOutCartBtn.bind(this);

    this.state = {
      linkDisabled: false,
      hover: false,
    };
  }

  addedToCart(item, id) {
    this.props.addItem(item, id);
    console.log("added to cart", this.state.linkDisabled);
  }

  mouseOver = () => {
    this.setState({
      hover: true,
    });
  };

  mouseOut() {
    this.setState({
      hover: false,
    });
  }

  mouseOverCartBtn = () => {
    this.setState({
      linkDisabled: true,
    });
  };

  mouseOutCartBtn() {
    this.setState({
      linkDisabled: false,
    });
  }

  render() {
    const { item } = this.props;
    const { linkDisabled, hover } = this.state;
    return (
      <Link
        className="clothes-page-single-link"
        to={!linkDisabled ? `/clothes/${item.id}` : "#"}
      >
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
          {hover ? (
            <img
              src={BuyCart}
              alt="product-cart"
              className="product-cart"
              style={{ width: "15%" }}
              onClick={this.addedToCart.bind(this, item, item.id)}
              onMouseOver={this.mouseOverCartBtn}
              onMouseOut={this.mouseOutCartBtn}
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
  addItem,
  selectClothesBySize,
})(ProductPageSingle);

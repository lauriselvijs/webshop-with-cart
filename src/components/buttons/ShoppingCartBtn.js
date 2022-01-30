import React, { Component } from "react";
import "../../styles/buttons/shopping-cart-btn.css";
import ShoppingCart from "../../img/shopping_cart.png";
import BlackCircle from "../../img/black_circle.png";
import { connect } from "react-redux";
import { openCart } from "../../state/actions/cartActions";

export class ShoppingCartBtn extends Component {
  constructor(props) {
    super(props);

    this.onCartBtnClick = this.onCartBtnClick.bind(this);
  }

  onCartBtnClick() {
    this.props.openCart();
  }

  render() {
    const { cartItems } = this.props.cart;

    const totalAmountItems = cartItems.reduce(
      (total, item) => total + parseInt(item.count),
      0
    );

    return (
      <>
        <img
          onClick={this.onCartBtnClick}
          className="cart-image"
          src={ShoppingCart}
          alt="shopping-cart"
        />
        {cartItems.length !== 0 ? (
          <div>
            <img
              className="black-circle"
              src={BlackCircle}
              alt="black-circle"
              style={{ width: "20px" }}
            />
            <div className="quantity-count">{totalAmountItems}</div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { openCart })(ShoppingCartBtn);

import React, { Component } from "react";
import "../../styles/buttons/shopping-cart-btn.css";
import ShoppingCart from "../../img/shopping_cart.png";
import BlackCircle from "../../img/black_circle.png";
import { connect } from "react-redux";
import { openCart } from "../../state/actions/cartActions";
import PropTypes from "prop-types";
import ShoppingCartModal from "../ShoppingCart/ShoppingCartModal/ShoppingCartModal";

export class ShoppingCartBtn extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.onCartBtnClick = this.onCartBtnClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
      this.props.openCart(false);
    }
  }

  onCartBtnClick() {
    const { cartOpen } = this.props.cart;

    cartOpen && this.props.openCart(false);
    !cartOpen && this.props.openCart(true);
  }

  render() {
    const { cartItems } = this.props.cart;

    const totalAmountItems = cartItems.reduce(
      (total, item) => total + parseInt(item.count),
      0
    );

    return (
      <div className="shopping-cart-nav-bar" ref={this.wrapperRef}>
        <img
          onClick={this.onCartBtnClick}
          className="cart-image"
          src={ShoppingCart}
          alt="shopping-cart"
        />
        {cartItems.length !== 0 ? (
          <div className="cart-item-counter">
            <img
              className={
                totalAmountItems > 9
                  ? "black-circle-multiple-items"
                  : "black-circle"
              }
              src={BlackCircle}
              alt="black-circle"
            />
            <div className="quantity-count">{totalAmountItems}</div>
          </div>
        ) : (
          ""
        )}
        <ShoppingCartModal />
      </div>
    );
  }
}

ShoppingCartBtn.propTypes = {
  cart: PropTypes.shape({
    cartOpen: PropTypes.bool,
    cartItems: PropTypes.array,
  }),
  openCart: PropTypes.func,
};

ShoppingCartBtn.defaultProps = {
  cart: {
    cartOpen: false,
    cartItems: [],
  },
  openCart: () => {},
};

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

export default connect(mapStateToProps, { openCart })(ShoppingCartBtn);

import React, { Component } from "react";
import ShoppingCartModalProductSingle from "./ShoppingCartModProdSingle";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class ShoppingCartProductView extends Component {
  render() {
    const { cartItems } = this.props.cart;
    return (
      <>
        {cartItems.map((item, index) => (
          <div key={index}>
            <ShoppingCartModalProductSingle item={item} />
          </div>
        ))}
      </>
    );
  }
}

ShoppingCartProductView.propTypes = {
  cartItems: PropTypes.array,
};

ShoppingCartProductView.defaultProps = {
  cartItems: [],
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(ShoppingCartProductView);

import React, { Component } from "react";
import "../../styles/buttons/remove-btn.css";
import { decQuantity } from "../../state/actions/cartActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class RemoveBtn extends Component {
  constructor(props) {
    super(props);

    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {};
  }

  removeFromCart(id) {
    this.props.decQuantity(id);
  }

  render() {
    const { productId } = this.props;
    return (
      <button
        className="remove-from-cart"
        onClick={this.removeFromCart.bind(this, productId)}
      >
        REMOVE FROM CART
      </button>
    );
  }
}

RemoveBtn.propTypes = {
  productId: PropTypes.string,
};

RemoveBtn.defaultProps = {
  productId: "1",
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {
  decQuantity,
})(RemoveBtn);

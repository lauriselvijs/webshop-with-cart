import React, { Component } from "react";
import { connect } from "react-redux";
import { incQuantity, decQuantity } from "../../state/actions/cartActions";
import "../../styles/buttons/qty-btn.css";
import PropTypes from "prop-types";

export class QuantityBtn extends Component {
  constructor(props) {
    super(props);

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);

    this.state = {};
  }

  increaseQuantity(id) {
    this.props.incQuantity(id);
  }

  decreaseQuantity(id) {
    this.props.decQuantity(id);
  }

  render() {
    const { itemId, itemCount } = this.props;
    return (
      <>
        <button
          className="plus-button-modal"
          onClick={this.increaseQuantity.bind(this, itemId)}
        >
          +
        </button>
        <div className="item-count">{itemCount}</div>
        <button
          className="minus-button-modal"
          onClick={this.decreaseQuantity.bind(this, itemId)}
        >
          -
        </button>
      </>
    );
  }
}

QuantityBtn.propTypes = {
  itemId: PropTypes.string,
  itemCount: PropTypes.number,
};

QuantityBtn.defaultProps = {
  itemId: "1",
  itemCount: 1,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {
  incQuantity,
  decQuantity,
})(QuantityBtn);

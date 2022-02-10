import React, { Component } from "react";
import "../../../styles/shopping-cart/shopping-cart-modal/shopping-cart-title.css";
import PropTypes from "prop-types";
import { pluralize } from "../../../utils/formatUtils";

export default class ShoppingCartTitle extends Component {
  render() {
    const { className, totalAmountItems } = this.props;

    const items = pluralize("item", totalAmountItems);

    return (
      <div className={className}>
        <span className="shopping-cart-my-bag">My Bag</span>, {totalAmountItems}{" "}
        {items}
      </div>
    );
  }
}

ShoppingCartTitle.propTypes = {
  className: PropTypes.string,
  totalAmountItems: PropTypes.number,
};

ShoppingCartTitle.defaultProps = {
  className: "shopping-cart-title",
  totalAmountItems: 1,
};

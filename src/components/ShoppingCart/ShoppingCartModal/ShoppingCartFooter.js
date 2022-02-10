import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../styles/shopping-cart/shopping-cart-modal/shopping-cart-footer.css";
import { connect } from "react-redux";
import { openCart } from "../../../state/actions/cartActions";
import PropTypes from "prop-types";

export class ShoppingCartFooter extends Component {
  constructor(props) {
    super(props);

    this.onViewBagBtnClick = this.onViewBagBtnClick.bind(this);
  }

  onViewBagBtnClick() {
    this.props.openCart(false);
  }

  render() {
    return (
      <div className="footer-modal">
        <>
          <Link
            onClick={this.onViewBagBtnClick}
            className="view-bag-button"
            to="/shopping-cart"
          >
            VIEW BAG
          </Link>
          <Link className="check-out-button" to="/check-out">
            CHECK OUT
          </Link>
        </>
      </div>
    );
  }
}

ShoppingCartFooter.propTypes = {
  openCart: PropTypes.func,
};

ShoppingCartFooter.defaultProps = {
  openCart: () => {},
};

export default connect(null, { openCart })(ShoppingCartFooter);

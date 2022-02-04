import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../styles/shopping-cart/shopping-cart-modal/shopping-cart-footer.css";
import { connect } from "react-redux";
import { openCart } from "../../../state/actions/cartActions";

export class ShoppingCartFooter extends Component {
  constructor(props) {
    super(props);

    this.onViewBagBtnClick = this.onViewBagBtnClick.bind(this);
  }

  onViewBagBtnClick() {
    this.props.openCart();
  }

  render() {
    return (
      <div className="footer-modal">
        <Link to="/shopping-cart">
          <button onClick={this.onViewBagBtnClick} className="view-bag-button">
            VIEW BAG
          </button>
        </Link>
        <Link to="/check-out">
          <button className="check-out-button">CHECK OUT</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { openCart })(ShoppingCartFooter);

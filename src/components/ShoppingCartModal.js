import React, { Component } from "react";
import "../styles/shopping-cart-modal.css";
import ShoppingCartSingle from "../components/ShoppingCartSingle";

class ShoppingCartModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected_S: true,
      selected_M: false,
      count: 1,
      view_bag: false,
      check_out: false,
    };
  }

  selectButtonS() {
    this.setState({ selected_S: !this.state.selected_S });
    this.setState({ selected_M: false });
  }

  selectButtonM() {
    this.setState({ selected_M: !this.state.selected_M });
    this.setState({ selected_S: false });
  }

  increaseQuantity = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  decreaseQuantity = () => {
    if (this.state.count > 1)
      this.setState((prev) => ({ count: prev.count - 1 }));
  };

  viewBag = () => {
    this.setState({ view_bag: !this.state.view_bag });
    console.log("view bag");
  };

  checkOut = () => {
    this.setState({ check_out: !this.state.check_out });
    console.log("check out");
  };

  render() {
    let btn_class_S = this.state.selected_S
      ? "size-S-selected-modal-btn"
      : "size-S-modal-btn";
    let btn_class_M = this.state.selected_M
      ? "size-M-selected-modal-btn"
      : "size-M-modal-btn";

    const { count } = this.state;
    const { modalDisplay } = this.props;
    return (
      <div className="modal" style={{ display: modalDisplay }}>
        <div className="title">
          <span style={{ fontWeight: "bold" }}>My Bag</span>, 2 items
        </div>
        <ShoppingCartSingle
          btn_class_S={btn_class_S}
          btn_class_M={btn_class_M}
          count={count}
          selectButtonS={this.selectButtonS.bind(this)}
          selectButtonM={this.selectButtonM.bind(this)}
          increaseQuantity={this.increaseQuantity.bind(this)}
          decreaseQuantity={this.decreaseQuantity.bind(this)}
        />
        <div className="total-section">
          <span className="total-title">Total</span>
          <span className="total-amount">$100</span>
        </div>
        <div className="footer-modal">
          <button className="view-bag-button" onClick={this.viewBag.bind(this)}>
            VIEW BAG
          </button>
          <button
            className="check-out-button"
            onClick={this.checkOut.bind(this)}
          >
            CHECK OUT
          </button>
        </div>
      </div>
    );
  }
}

export default ShoppingCartModal;

import React, { Component } from "react";
import "../styles/shopping-cart-modal.css";
import Sweater from "../img/sweater.png";

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
    return (
      <div className="container">
        <div class="grid-container-cart-modal">
          <div class="product-info">
            <h2>Apollo running short</h2>
            <h4>$50.00</h4>
          </div>
          <div class="sizes">
            <button
              className={btn_class_S}
              onClick={this.selectButtonS.bind(this)}
            >
              S
            </button>
            <button
              className={btn_class_M}
              onClick={this.selectButtonM.bind(this)}
            >
              M
            </button>
          </div>
          <div class="white-space"></div>
          <div class="quantity-increase">
            <button
              className="plus-button-modal"
              onClick={this.increaseQuantity.bind(this)}
            >
              +
            </button>
          </div>
          <div class="quantity-modal"> {this.state.count}</div>
          <div class="quantity-decrease">
            <button
              className="minus-button-modal"
              onClick={this.decreaseQuantity.bind(this)}
            >
              -
            </button>
          </div>
          <div class="product-image">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
          </div>
          <div class="product-info">
            <h2>Apollo running short</h2>
            <h4>$50.00</h4>
          </div>
          <div class="sizes">
            <button
              className={btn_class_S}
              onClick={this.selectButtonS.bind(this)}
            >
              S
            </button>
            <button
              className={btn_class_M}
              onClick={this.selectButtonM.bind(this)}
            >
              M
            </button>
          </div>
          <div class="white-space"></div>
          <div class="quantity-increase">
            <button
              className="plus-button-modal"
              onClick={this.increaseQuantity.bind(this)}
            >
              +
            </button>
          </div>
          <div class="quantity-modal"> {this.state.count}</div>
          <div class="quantity-decrease">
            <button
              className="minus-button-modal"
              onClick={this.decreaseQuantity.bind(this)}
            >
              -
            </button>
          </div>
          <div class="product-image">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
          </div>

          <div className="total-title">Total</div>
          <div className="total-amount">$100</div>
          <div className="view-bag">
            <button
              className="view-bag-button"
              onClick={this.viewBag.bind(this)}
            >
              VIEW BAG
            </button>
          </div>
          <div className="check-out">
            <button
              className="check-out-button"
              onClick={this.checkOut.bind(this)}
            >
              CHECK OUT
            </button>
          </div>
        </div>
        <div class="grid-container-cart-modal">
          <div class="product-info">
            <h2>Apollo running short</h2>
            <h4>$50.00</h4>
          </div>
          <div class="sizes">
            <button
              className={btn_class_S}
              onClick={this.selectButtonS.bind(this)}
            >
              S
            </button>
            <button
              className={btn_class_M}
              onClick={this.selectButtonM.bind(this)}
            >
              M
            </button>
          </div>
          <div class="white-space"></div>
          <div class="quantity-increase">
            <button
              className="plus-button-modal"
              onClick={this.increaseQuantity.bind(this)}
            >
              +
            </button>
          </div>
          <div class="quantity-modal"> {this.state.count}</div>
          <div class="quantity-decrease">
            <button
              className="minus-button-modal"
              onClick={this.decreaseQuantity.bind(this)}
            >
              -
            </button>
          </div>
          <div class="product-image">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
          </div>
          <div class="product-info">
            <h2>Apollo running short</h2>
            <h4>$50.00</h4>
          </div>
          <div class="sizes">
            <button
              className={btn_class_S}
              onClick={this.selectButtonS.bind(this)}
            >
              S
            </button>
            <button
              className={btn_class_M}
              onClick={this.selectButtonM.bind(this)}
            >
              M
            </button>
          </div>
          <div class="white-space"></div>
          <div class="quantity-increase">
            <button
              className="plus-button-modal"
              onClick={this.increaseQuantity.bind(this)}
            >
              +
            </button>
          </div>
          <div class="quantity-modal"> {this.state.count}</div>
          <div class="quantity-decrease">
            <button
              className="minus-button-modal"
              onClick={this.decreaseQuantity.bind(this)}
            >
              -
            </button>
          </div>
          <div class="product-image">
            <img src={Sweater} alt="product" style={{ width: "100%" }} />
          </div>

          <div className="total-title">Total</div>
          <div className="total-amount">$100</div>
          <div className="view-bag">
            <button
              className="view-bag-button"
              onClick={this.viewBag.bind(this)}
            >
              VIEW BAG
            </button>
          </div>
          <div className="check-out">
            <button
              className="check-out-button"
              onClick={this.checkOut.bind(this)}
            >
              CHECK OUT
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCartModal;

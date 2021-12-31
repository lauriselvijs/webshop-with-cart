import React, { Component } from "react";
import "../styles/product-view.css";
import Sweater from "../img/sweater.png";

class ProductView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected_XS: false,
      selected_S: true,
      selected_M: false,
      selected_L: false,
      count: 1,
      added_to_cart: false,
    };
  }

  selectButtonXS() {
    this.setState({ selected_XS: !this.state.selected_XS });
    this.setState({ selected_S: false });
    this.setState({ selected_M: false });
    this.setState({ selected_L: false });
  }

  selectButtonS() {
    this.setState({ selected_S: !this.state.selected_S });
    this.setState({ selected_XS: false });
    this.setState({ selected_M: false });
    this.setState({ selected_L: false });
  }

  selectButtonM() {
    this.setState({ selected_M: !this.state.selected_M });
    this.setState({ selected_XS: false });
    this.setState({ selected_S: false });
    this.setState({ selected_L: false });
  }

  selectButtonL() {
    this.setState({ selected_L: !this.state.selected_L });
    this.setState({ selected_XS: false });
    this.setState({ selected_S: false });
    this.setState({ selected_M: false });
  }

  addToCart() {
    this.setState({ added_to_cart: !this.state.added_to_cart });
    console.log("added to card");
  }

  render() {
    let btn_class_XS = this.state.selected_XS ? "size-XS-active" : "size-XS";
    let btn_class_S = this.state.selected_S ? "size-S-active" : "size-S";
    let btn_class_M = this.state.selected_M ? "size-M-active" : "size-M";
    let btn_class_L = this.state.selected_L ? "size-L-active" : "size-L";

    return (
      <div className="parent">
        <div className="thumbnail-1">
          <img src={Sweater} alt="product" style={{ width: "20%" }} />
        </div>
        <div className="thumbnail-2">
          <img src={Sweater} alt="product" style={{ width: "20%" }} />
        </div>
        <div className="thumbnail-3">
          <img src={Sweater} alt="product" style={{ width: "20%" }} />
        </div>
        <div className="white-space"> </div>
        <div className="main-image">
          <img src={Sweater} alt="product" style={{ width: "100%" }} />
        </div>
        <div className="product-name">
          <h2>Apollo Running Short</h2>
          <h4>SIZE:</h4>
        </div>
        <div className="size">
          <button
            className={btn_class_XS}
            onClick={this.selectButtonXS.bind(this)}
          >
            XS
          </button>
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
          <button
            className={btn_class_L}
            onClick={this.selectButtonL.bind(this)}
          >
            L
          </button>
        </div>
        <div className="price">
          <h4>PRICE:</h4>
          <h4>$50.00</h4>
        </div>
        <div className="add-to-cart-section">
          <button className="add-to-cart" onClick={this.addToCart.bind(this)}>
            ADD TO CART
          </button>
        </div>
        <div className="info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?
          </p>
        </div>
      </div>
    );
  }
}

export default ProductView;

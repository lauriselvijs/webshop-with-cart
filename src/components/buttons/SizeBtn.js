import React, { Component } from "react";
import "../../styles/buttons/size-btn.css";
import { connect } from "react-redux";

export class SizeBtn extends Component {
  render() {
    const { selectButton, size, selectedSize } = this.props;
    let sizeBtnClass = "size-modal-btn";

    if (selectedSize === size) {
      sizeBtnClass = "size-selected-modal-btn";
    } else {
      sizeBtnClass = "size-modal-btn";
    }
    return (
      <button className={sizeBtnClass} onClick={selectButton}>
        {size}
      </button>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(SizeBtn);

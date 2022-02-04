import React, { Component } from "react";
import "../../styles/buttons/size-btn.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class SizeBtn extends Component {
  render() {
    const { selectSizeButton, size, selectedSize } = this.props;

    let sizeBtnClass = "size-modal-btn";

    if (selectedSize === size) {
      sizeBtnClass = "size-selected-modal-btn";
    } else {
      sizeBtnClass = "size-modal-btn";
    }
    return (
      <button className={sizeBtnClass} onClick={selectSizeButton}>
        {size}
      </button>
    );
  }
}

SizeBtn.propTypes = {
  selectSizeButton: PropTypes.func,
  size: PropTypes.string,
  selectedSize: PropTypes.string,
};

SizeBtn.defaultProps = {
  selectSizeButton: () => {},
  size: "S",
  selectedSize: "S",
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(SizeBtn);

import React, { Component } from "react";
import "../../styles/buttons/size-btn.css";
import PropTypes from "prop-types";

export default class SizeBtn extends Component {
  render() {
    const { selectSizeButton, size, selectedSize } = this.props;

    let sizeBtnClass = "size-attr-btn";

    if (selectedSize === size) {
      sizeBtnClass = "size-selected-attr-btn";
    } else {
      sizeBtnClass = "size-attr-btn";
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

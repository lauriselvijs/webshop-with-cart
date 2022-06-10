import React, { Component } from "react";
import "../../styles/buttons/size-btn.css";
import PropTypes from "prop-types";

export default class SizeBtn extends Component {
  render() {
    const {
      selectSizeButton,
      size,
      selectedSize,
      className,
      classNameSelected,
    } = this.props;

    let sizeBtnClass = className;

    if (selectedSize === size) {
      sizeBtnClass = classNameSelected;
    } else {
      sizeBtnClass = className;
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
  className: PropTypes.string,
  classNameSelected: PropTypes.string,
};

SizeBtn.defaultProps = {
  selectSizeButton: () => {},
  size: "S",
  selectedSize: "S",
  className: "size-attr-btn",
  classNameSelected: "size-selected-attr-btn",
};

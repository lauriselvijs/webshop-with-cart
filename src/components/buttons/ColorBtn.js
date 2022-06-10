import React, { Component } from "react";
import "../../styles/buttons/color-btn.css";
import PropTypes from "prop-types";

export default class ColorBtn extends Component {
  render() {
    const {
      colorCode,
      selectedColorCode,
      selectColorButton,
      className,
      classNameSelected,
    } = this.props;

    let colorBtnClass = className;

    if (selectedColorCode === colorCode) {
      colorBtnClass = classNameSelected;
    } else {
      colorBtnClass = className;
    }

    return (
      <button
        className={colorBtnClass}
        style={{
          backgroundColor: colorCode,
          border: colorCode === "#FFFFFF" && "1px solid black",
        }}
        onClick={selectColorButton}
      ></button>
    );
  }
}

ColorBtn.propTypes = {
  className: PropTypes.string,
  classNameSelected: PropTypes.string,
  colorCode: PropTypes.string,
  selectedColorCode: PropTypes.string,
  selectColorButton: PropTypes.func,
};

ColorBtn.defaultProps = {
  className: "color-btn",
  classNameSelected: "color-selected-btn",
  colorCode: "#00000",
  selectedColorCode: "#00000",
  selectColorButton: () => {},
};

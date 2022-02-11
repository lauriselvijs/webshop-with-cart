import React, { Component } from "react";
import "../../styles/buttons/color-btn.css";
import PropTypes from "prop-types";

export default class ColorBtn extends Component {
  render() {
    const { colorCode, selectedColorCode, selectColorButton } = this.props;

    let colorBtnClass = "color-btn";

    if (selectedColorCode === colorCode) {
      colorBtnClass = "color-selected-btn";
    } else {
      colorBtnClass = "color-btn";
    }

    return (
      <button
        className={colorBtnClass}
        style={{ backgroundColor: colorCode }}
        onClick={selectColorButton}
      ></button>
    );
  }
}

ColorBtn.propTypes = {
  colorCode: PropTypes.string,
  selectedColorCode: PropTypes.string,
  selectColorButton: PropTypes.func,
};

ColorBtn.defaultProps = {
  colorCode: "#00000",
  selectedColorCode: "#00000",
  selectColorButton: () => {},
};

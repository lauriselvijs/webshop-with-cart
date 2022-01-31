import React, { Component } from "react";
import { selectColorCode } from "../../state/actions/cartActions";
import "../../styles/buttons/color-btn.css";

export default class ColorBtn extends Component {
  render() {
    const { colorName, colorCode, selectedColorCode, selectButton } =
      this.props;

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
        onClick={selectButton}
      ></button>
    );
  }
}

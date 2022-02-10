import React, { Component } from "react";
import "../../styles/buttons/opt-attribute-btn.css";
import PropTypes from "prop-types";

export default class OptAttributeBtn extends Component {
  render() {
    const { selectOptAttrButton, optionalAttribute, selectedOptAttribute } =
      this.props;

    let OptAttributeBtnClass = "opt-attr-btn";

    if (selectedOptAttribute === optionalAttribute) {
      OptAttributeBtnClass = "opt-attr-selected-btn";
    } else {
      OptAttributeBtnClass = "opt-attr-btn";
    }
    return (
      <button className={OptAttributeBtnClass} onClick={selectOptAttrButton}>
        {optionalAttribute}
      </button>
    );
  }
}

OptAttributeBtn.propTypes = {
  selectOptAttrButton: PropTypes.func,
  optionalAttribute: PropTypes.string,
  selectedOptAttribute: PropTypes.string,
};

OptAttributeBtn.defaultProps = {
  selectOptAttrButton: () => {},
  optionalAttribute: "Yes",
  selectedOptAttribute: "Yes",
};

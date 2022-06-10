import React, { Component } from "react";
import "../../styles/buttons/opt-attribute-btn.css";
import PropTypes from "prop-types";

export default class OptAttributeBtn extends Component {
  render() {
    const {
      selectOptAttrButton,
      optionalAttribute,
      selectedOptAttribute,
      className,
      classNameSelected,
    } = this.props;

    let OptAttributeBtnClass = className;

    if (selectedOptAttribute === optionalAttribute) {
      OptAttributeBtnClass = classNameSelected;
    } else {
      OptAttributeBtnClass = className;
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
  className: PropTypes.string,
  classNameSelected: PropTypes.string,
};

OptAttributeBtn.defaultProps = {
  selectOptAttrButton: () => {},
  optionalAttribute: "Yes",
  selectedOptAttribute: "Yes",
  className: "opt-attr-btn",
  classNameSelected: "opt-attr-selected-btn",
};

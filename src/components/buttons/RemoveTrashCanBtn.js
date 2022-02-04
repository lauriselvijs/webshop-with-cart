import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/buttons/remove-trash-can-btn.css";

export default class RemoveTrashCanBtn extends Component {
  render() {
    const {
      src,
      alt,
      className,
      removeFromCart,
      onMouseEnterBtn,
      onMouseLeaveBtn,
    } = this.props;

    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onClick={removeFromCart}
        onMouseEnter={onMouseEnterBtn}
        onMouseLeave={onMouseLeaveBtn}
      />
    );
  }
}

RemoveTrashCanBtn.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  removeFromCart: PropTypes.func,
  onMouseEnterBtn: PropTypes.func,
  onMouseLeaveBtn: PropTypes.func,
};

RemoveTrashCanBtn.defaultProps = {
  className: "delete-btn",
  src: "",
  alt: "Remove From Cart Button",
  removeFromCart: () => {},
  onMouseEnterBtn: () => {},
  onMouseLeaveBtn: () => {},
};

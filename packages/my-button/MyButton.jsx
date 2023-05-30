import React from "react";
import PropTypes from "prop-types";

export const MyButton = ({ color, size, disabled, children, handleClick }) => {
  return (
    <button
      type="button"
      className={`
        MyButton rounded-lg
        border
        font-bold color-white
        ${size === "small" ? "p-sm text-300 leading-3" : ""}
        ${size === "medium" ? "py-sm px-md text-500 leading-5" : ""}
        ${size === "large" ? "p-lg text-900 leading-9" : ""}
        ${(color === "blue") && !disabled ? "bg-blue-500 border-blue-900 text-white hover:border-black" : ""}
        ${(color === "green") && !disabled ? "bg-green-500 border-green-900 text-white hover:border-black" : ""}
        ${(color === "red") && !disabled ? "bg-red-500 border-red-900 text-white hover:border-black" : ""}
        ${
          disabled
            ? "bg-grey-500 border-grey-900 text-grey-900 cursor-not-allowed"
            : "cursor-pointer"
        }
      `}
      disabled={disabled || false}
      onClick={(e) => handleClick(e)}
    >
      {children}
    </button>
  );
};

MyButton.propTypes = {
  color: PropTypes.oneOf(["green", "blue", "red"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  children: PropTypes.node,
  handleClick: PropTypes.func,
};

MyButton.defaultProps = {
  color: "green",
  size: "medium",
  disabled: false,
  children: "My Button",
  handleClick: `${() => console.log("click")}`,
};

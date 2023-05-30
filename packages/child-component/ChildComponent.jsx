import React from "react";
import PropTypes from "prop-types";

export const ChildComponent = ({ children }) => {
  return <h3 className="text-500 leading-5 text-wisteria border border-wisteria p-sm">{children}</h3>;
};

ChildComponent.propTypes = {
  children: PropTypes.node,
};

ChildComponent.defaultProps = {
  children: "Title",
};

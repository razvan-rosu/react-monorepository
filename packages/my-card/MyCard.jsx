import React from "react";
import PropTypes from "prop-types";

export const MyCard = ({ narrow, children }) => {
  return (
    <section
      className={`
        MyCard
        bg-white
        rounded-md
        shadow-md
        py-sm
        ${narrow ? "px-sm" : "px-lg"}
      `}
    >
      {children}
    </section>
  );
};

MyCard.propTypes = {
  narrow: PropTypes.bool,
  children: PropTypes.node,
};

MyCard.defaultProps = {
  narrow: false,
  children: "Card content",
};

import React from "react";
import PropTypes from "prop-types";
import Bsutton from "../button";
import "../../dist/mw-ui.css";
/**
 * Primary UI component for user interaction
 */
export const Button = ({ type, label}) => {
  return <Bsutton type="button">{label}</Bsutton>;
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  label: "123",
};

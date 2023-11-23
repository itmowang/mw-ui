import React from "react";
import PropTypes from "prop-types";
import { Button as Bsutton} from "@damw-ui/ui";
import "@damw-ui/ui/dist/mw-ui.css";

/**
 * Primary UI component for user interaction123
 */
export const Button = ({ children, ...props}) => { 
  console.log(props);
  return <Bsutton {...props}>{children}</Bsutton>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ]).isRequired,
  size: PropTypes.oneOf([
    "default",
    "small",
    "large",
  ],).isRequired,
};

Button.defaultProps = { 
  children: "Button",
  type:"primary",
  size:"default"
};

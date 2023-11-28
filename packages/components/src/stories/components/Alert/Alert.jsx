import React from "react";
import PropTypes from "prop-types";
import { Alert as AlertComponents } from "@damw-ui/ui";
import "@damw-ui/ui/dist/mw-ui.css";

/**
 * 基于 Google Icon 库 https://marella.me/material-icons/demo/
 */
export const Alert = ({ children, ...props}) => {  
  return <AlertComponents {...props}></AlertComponents>;
};

Alert.propTypes = {
  type: PropTypes.oneOf([
    "success",
    "error",
    "warning",
    "info"
  ]).isRequired,
};

Alert.defaultProps = { 
  
};

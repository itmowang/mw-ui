import React from "react";
import PropTypes from "prop-types";
import { Icon as IconComponents } from "@damw-ui/ui";
import "@damw-ui/ui/dist/mw-ui.css";

/**
 * 基于 Google Icon 库 https://marella.me/material-icons/demo/
 */
export const Icon = ({ children, ...props}) => {  
  return <IconComponents {...props}></IconComponents>;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number, 
  color:PropTypes.string,
  className:PropTypes.string
};

Icon.defaultProps = { 
  color:"#000000",
  size:36,
};

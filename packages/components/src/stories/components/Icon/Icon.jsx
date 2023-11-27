import React from "react";
import PropTypes from "prop-types";
import { Icon as IconComponents } from "@damw-ui/ui";
import "@damw-ui/ui/dist/mw-ui.css";

/**
 * Primary UI component for user interaction123
 */
export const Icon = ({ children, ...props}) => {  
  return <IconComponents {...props}></IconComponents>;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,

};

Icon.defaultProps = { 
 
};

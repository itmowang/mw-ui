import React from "react";
import PropTypes from "prop-types";
import { Modal as ModalComponents } from "@damw-ui/ui";
import "@damw-ui/ui/dist/mw-ui.css";

/**
 * 基于 Google Icon 库 https://marella.me/material-icons/demo/
 */
export const Modal = ({ children, ...props}) => {  
  return <ModalComponents {...props}></ModalComponents>;
};

Modal.propTypes = {
 
};

Modal.defaultProps = { 

};

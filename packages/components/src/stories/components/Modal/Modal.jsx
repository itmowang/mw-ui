import React from "react";
import PropTypes from "prop-types";
import { Modal as ModalComponents } from "@damw-ui/ui";
import "@damw-ui/ui/dist/mw-ui.css";

/**
 *  Modal 展示框
 */
export const Modal = ({ children, ...props}) => {  
  return <>
   <ModalComponents {...props}></ModalComponents>
   </>;
};



Modal.propTypes = {
  isOpen:PropTypes.bool.isRequired,
  onClose:PropTypes.func,
  children:PropTypes.node
};

Modal.defaultProps = { 
  isOpen:false,
  onClose: () => {},
  children:()=> <div> Test </div>
};

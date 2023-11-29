import React from "react";
import PropTypes from "prop-types";
import { Button as Bsutton} from "@damw-ui/ui";
import "@damw-ui/ui/dist/mw-ui.css";

/**
 * Primary UI component for user interaction123
 */
export const Button = ({ children, ...props}) => { 
  return <Bsutton {...props}>{children}</Bsutton>;
};

export const AllButton = () =>{
  return <>
    <Bsutton type="primary">Button</Bsutton>
    <Bsutton type="secondary">Button</Bsutton>
    <Bsutton type="success">Button</Bsutton>
    <Bsutton type="info">Button</Bsutton>
    <Bsutton type="warning">Button</Bsutton>
    <Bsutton type="danger">Button</Bsutton>
  </>
}

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
  disabled:PropTypes.bool,
  link:PropTypes.bool
};

Button.defaultProps = { 
  children: "Button",
  type:"primary",
  size:"default",
  disabled:false,
  link:true
};

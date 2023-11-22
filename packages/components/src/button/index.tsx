import React, { ReactNode } from "react";

/**
 * @name 
 * @param {ReactNode} children
 */

interface ButtonProps  {
  children: ReactNode;
  type?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  ...rest
}) => {
  
  const getVariantStyles = () => {
    switch (type) {
      case "primary":
        return "bg-primary text-white";
      case "secondary":
        return "bg-secondary text-white";
      case "success":
        return "bg-success text-white";
      case "info":
        return "bg-info text-white";
      case "warning":
        return "bg-warning text-white";
      case "danger":
        return "bg-danger text-white";
      default:
        return "bg-default text-white";
    }
  };

  return (
    <button
      className={`py-2 px-4 rounded  ${getVariantStyles()} hover:bg-opacity-75 focus:outline-none focus:ring focus:border-blue-300`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

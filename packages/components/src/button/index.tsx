import React, { ReactNode } from "react";

/**
 * @name
 * @param {ReactNode} children
 */

interface ButtonProps {
  children: ReactNode;
  type?: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
  size?: "default" | "small" | "large";
  disabled?: boolean;
  link?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "primary",
  size = "default",
  disabled = false,
  link = false,
  onClick,
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

  // size
  const getSizeStyle = () => {
    switch (size) {
      case "default":
        return "py-2 px-4"; // 默认大小
      case "small":
        return "py-1 px-2 text-sm"; // 小号按钮
      case "large":
        return "py-3 px-6 text-lg"; // 大号按钮
      default:
        return "py-2 px-4";
    }
  };

  const getLinkColor = () => {
    switch (type) {
      case "primary":
        return "text-primary";
      case "secondary":
        return "text-secondary";
      case "success":
        return "text-success";
      case "info":
        return "text-info";
      case "warning":
        return "text-warning";
      case "danger":
        return "text-danger";
      default:
        return "text-default";
    }
  };

  // disabled
  const getDisabledStyle = () => {
    if (disabled) {
      return "bg-gray-300 cursor-not-allowed opacity-70 ";
    }
    return "";
  };

  return link ? (
    <div
      className={`${getLinkColor()}  cursor-pointer`}
      onClick={() => {
        disabled ? null : onClick;
      }}
    >
      {" "}
      {children}
    </div>
  ) : (
    <button
      className={` ${getSizeStyle()}  ${getVariantStyles()} ${getDisabledStyle()} rounded hover:bg-opacity-75 focus:outline-none focus:ring focus:border-blue-300`}
      disabled={disabled}
      onClick={() => {
        onClick && onClick();
        // console.log("onClick");
        
        // disabled ? null : onClick;
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

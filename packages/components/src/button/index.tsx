import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...rest
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return "bg-gray-500 text-white";
      default:
        return "bg-blue-500 text-white";
    }
  };

  return (
    <button
      className={`py-2 px-4 rounded ${getVariantStyles()} hover:bg-opacity-75 focus:outline-none focus:ring focus:border-blue-300`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

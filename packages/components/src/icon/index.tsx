import React from "react";
import "material-icons/iconfont/material-icons.css";

interface IconProps {
  icon: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  icon,
  size = 24,
  color = "black",
  className = "",
  ...props
}) => {
  const iconClassName = `material-icons ${className}`;

  const style = {
    fontSize: `${size}px`,
    color: color,
  };

  return (
    <span className={iconClassName} style={style} {...props}>
      {icon}
    </span>
  );
};

export default Icon;

import React from "react";
import { createFromIconfontCN } from "@icon-park/react";

// Replace the scriptUrl with your IconPark script URL
const scriptUrl = "//at.alicdn.com/t/font_1234567abcdef.js";

const IconFont = createFromIconfontCN({
  scriptUrl,
});

const Icon = ({
  type,
  size = 24,
  color = "currentColor",
  className,
  ...rest
}) => {
  const iconClasses = `inline-block align-middle ${className || ""}`;

  return (
    <IconFont
      type={type}
      size={size}
      fill={color}
      className={iconClasses}
      {...rest}
    />
  );
};

export default Icon;

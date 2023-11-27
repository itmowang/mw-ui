import React from "react";
import * as allIcon from "@icon-park/react";

// Replace the scriptUrl with your IconPark script URL
const scriptUrl = "//at.alicdn.com/t/font_1234567abcdef.js";

interface IconProps {
  icon: string;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  return <div> <allIcon.Home theme="filled" /></div>;
};

export default Icon;

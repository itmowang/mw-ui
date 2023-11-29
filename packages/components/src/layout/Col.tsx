// Col.tsx
import React, { ReactNode } from 'react';

interface ColProps {
    children: ReactNode;
    span?: number;
  }
  
  const Col: React.FC<ColProps> = ({ children, span = 24 }) => {
    const widthClass = `w-${(span / 2)}/12`;
  
    return <div className={`p-2 ${widthClass}`}>{children}</div>;
  };
export default Col;

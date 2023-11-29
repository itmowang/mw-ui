// Row.tsx
import React, { ReactNode } from 'react';

interface RowProps {
  children: ReactNode;
  gutter?: number;
}

const Row: React.FC<RowProps> = ({ children, gutter = 0 }) => {
  const gutterStyle = gutter > 0 ? { margin: `-${gutter / 2}px` } : {};

  return (
    <div className="flex flex-wrap" style={gutterStyle}>
      {children}
    </div>
  );
};

export default Row;

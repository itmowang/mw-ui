// Col.tsx
import React, { ReactNode } from 'react';

interface ColProps {
  span: number;
  children: ReactNode;
}

const Col: React.FC<ColProps> = ({ span, children }) => {
  const customClass = `basis-${span / 2}/12`; // 生成自定义 class 名称

  return (
    <div className={`flex ${customClass}`}>{children}</div>
  );
};

export default Col;

// Alert.tsx
import React from 'react';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

const Alert: React.FC<AlertProps> = ({ type, message }) => {
  const alertClasses = `px-4 py-2 mb-4 rounded ${getTypeClasses(type)}`;

  return (
    <div className={alertClasses}>
      <p className="font-semibold">{message}</p>
    </div>
  );
};

const getTypeClasses = (type: string) => {
  switch (type) {
    case 'success':
      return 'bg-green-200 text-green-800';
    case 'error':
      return 'bg-red-200 text-red-800';
    case 'warning':
      return 'bg-yellow-200 text-yellow-800';
    case 'info':
      return 'bg-blue-200 text-blue-800';
    default:
      return '';
  }
};

export default Alert;
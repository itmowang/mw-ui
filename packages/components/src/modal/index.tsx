// Modal.tsx
import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen ? 'fixed inset-0 flex items-center justify-center' : 'hidden';
  const overlayClasses = 'fixed inset-0 bg-black opacity-50';
  const contentClasses = 'bg-white p-6 rounded';

  return (
    <div className={modalClasses}>
      <div className={overlayClasses} onClick={onClose}></div>
      <div className={contentClasses}>
        {children}
        <button className="mt-4 p-2 bg-gray-300 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

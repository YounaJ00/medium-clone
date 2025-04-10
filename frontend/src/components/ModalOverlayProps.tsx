// src/components/ModalOverlay.tsx
import React from 'react';
import * as styles from '../styles/modal.css';

interface ModalOverlayProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalOverlay: React.FC<ModalOverlayProps> = ({ onClose, children }) => {
  const handleClickBackground = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleClickBackground}>
      {children}
    </div>
  );
};

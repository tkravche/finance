import React, { useEffect } from 'react';
import { StyledButton, StyledModal, StyledOverlay } from './Modal.styled';
import { createPortal } from 'react-dom';

const portal = document.getElementById('modal');

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const handleEscapeKeyPress = e => {
        if (e.key === 'Escape') {
          console.log(e.key);
          onClose();
        }
      };

      const handleBackdropClick = e => {
        console.log(e.target);
        if (e.target.dataset.modal) {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscapeKeyPress);
      document.addEventListener('click', handleBackdropClick);
      return () => {
        document.removeEventListener('keydown', handleEscapeKeyPress);
        document.removeEventListener('click', handleBackdropClick);
      };
    }
  }, [isOpen, onClose]);
  return createPortal(
    isOpen && (
      <StyledOverlay data-modal="backdrop">
        <StyledModal>
          {children}
          <StyledButton type="button" onClick={onClose}>
            Cancel
          </StyledButton>
        </StyledModal>
      </StyledOverlay>
    ),
    portal
  );
};

export default Modal;

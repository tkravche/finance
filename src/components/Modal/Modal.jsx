import React, { useEffect } from 'react';
import { StyledModal, StyledOverlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import Button from '../Buttons/Button';

const portal = document.getElementById('modal');

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const handleEscapeKeyPress = e => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      const handleBackdropClick = e => {
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
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
        </StyledModal>
      </StyledOverlay>
    ),
    portal
  );
};

export default Modal;

import React from 'react';
import styled from 'styled-components';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonText: string;
  message: string;
}

const PopupModal: React.FC<PopupModalProps> = ({
  isOpen,
  onClose,
  buttonText,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <Modal>
        <Message>{message}</Message>
        <Button onClick={onClose}>{buttonText}</Button>
      </Modal>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
`;

const Message = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export default PopupModal;

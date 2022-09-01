import React, {memo} from "react";
import Modal from "react-modal";

const MyModal = memo(
  ({ isOpen, onClose, title, description, closeBtnLabel }) => (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>{title}</h2>
      <div>{description}</div>
      <button onClick={onClose}>{closeBtnLabel}</button>
    </Modal>
  )
);

export default MyModal;
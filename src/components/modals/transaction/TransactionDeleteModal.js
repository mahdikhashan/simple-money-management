import React from "react";
import { useRef } from "react";

import { useDispatch } from "react-redux";
import { removeCost } from "@Store/cost/slices";

import Button from "@Components/common/button";
import Modal from "@Components/common/modal";

import CloseIcon from "@Assets/icons/x-regular.png";

import { useNavigate, useParams } from "react-router-dom";

import "./style.css";
import "./transaction-delete-modal.css";

const CloseIconImage = ({ onClose }) => {
  return (
    <img className="close-btn" src={CloseIcon} alt="close" onClick={onClose} />
  );
};

function TransactionDeleteModal() {
  let navigate = useNavigate();
  let { id } = useParams();
  let buttonRef = useRef(null);

  const dispatch = useDispatch();

  function onDismiss() {
    navigate(-1);
  }

  function onConfirmHandler() {
    dispatch(removeCost({ id }));
    onDismiss();
  }

  function onBackHandler() {
    onDismiss();
  }

  return (
    <Modal
      aria-labelledby="label"
      onDismiss={onDismiss}
      initialFocusRef={buttonRef}
    >
      <div className="modal-body">
        <CloseIconImage onClose={onDismiss} />
        <div className="wrapper">
          <h2>Delete Transaction</h2>
          <div className="wrapper-body">
            <Button type="button" onClick={onConfirmHandler}>
              Confirm
            </Button>
            <Button type="button" onClick={onBackHandler}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default TransactionDeleteModal;

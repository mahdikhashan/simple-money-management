import React from "react";

import { default as ReactModal } from "react-modal";

import "./style.css";

const Modal = ({ children, ...props }) => {
  return <ReactModal {...props}>{children}</ReactModal>;
};

export default Modal;

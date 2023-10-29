import React from "react";

import { Dialog } from "@reach/dialog";

import "@reach/dialog/styles.css";
import "@Styles/modal-animation.css";

function Modal(props) {
  const { children, ...restProps } = props;
  return (
    <Dialog className="slide-down" {...restProps}>
      {children}
    </Dialog>
  );
}

export default Modal;

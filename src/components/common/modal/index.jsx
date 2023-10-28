import React from "react";

import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

function Modal(props) {
  const { children, ...restProps } = props;
  return <Dialog {...restProps}>{children}</Dialog>;
}

export default Modal;

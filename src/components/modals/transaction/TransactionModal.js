import React, { memo } from "react";
import { useDispatch } from "react-redux";

import isEmpty from "lodash.isempty";

import * as validator from "yup";
import { Field, Form, Formik } from "formik";

import { addCost, updateCost } from "@Store/cost/slices";

import { InputFormik } from "@Components/common/input";
import Select from "@Components/common/select";
import Button from "@Components/common/button";
import Modal from "@Components/common/modal";

import CloseIcon from "@Assets/icons/x-regular.png";

import "./style.css";

const CloseIconImage = ({ onClose }) => {
  return (
    <img className="close-btn" src={CloseIcon} alt="close" onClick={onClose} />
  );
};

const validationSchema = validator.object({
  description: validator
    .string()
    .min(8, "Must be at least 8 characters")
    .max(20, "Must be less  than 20 characters")
    .required("Description is required")
    .matches(/^[a-zA-Z0-9]+$/, "Cannot contain special characters or spaces"),
  price: validator
    .string()
    .min(1, "Must be at least 1 characters")
    .max(20, "Must be less  than 20 characters")
    .required("Price is required")
    .matches(/^[0-9]+$/, "Cannot contain characters or spaces"),
  category: validator
    .string()
    .min(4, "Must be at least 4 characters")
    .max(20, "Must be less  than 20 characters")
    .required("Category is required")
    .matches(
      /^[a-zA-Z]+$/,
      "Cannot contain special characters, numbers or spaces"
    ),
  transactionType: validator
    .string()
    .required("A transaction option is required"),
});

const TransactionForm = (props) => {
  const { formikProps, initials } = props;
  const { errors, isSubmitting } = formikProps;

  return (
    <Form>
      <div className="input-group">
        <InputFormik name="description" type="text" placeholder="Description" />
        <InputFormik name="price" type="text" placeholder="Price" />
        <InputFormik name="category" type="text" placeholder="Category" />
      </div>
      <div className="select-group">
        <span>
          <Field
            component={Select}
            name="transactionType"
            variant="up"
            id="up"
            label="Enter"
          />
          <Field
            component={Select}
            name="transactionType"
            variant="down"
            id="down"
            label="Exit"
          />
        </span>
        {errors.transactionType && (
          <div className="error">{errors.transactionType}</div>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isEmpty(initials) ? "Register" : "Edit"}
      </Button>
    </Form>
  );
};

const TransactionModal = memo((props) => {
  const { isOpen, onClose, ...initials } = props;
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      preventScroll={true}
    >
      <CloseIconImage onClose={onClose} />
      <div className="wrapper">
        <h2>New transaction</h2>
        <Formik
          initialValues={initials}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              isEmpty(initials)
                ? dispatch(addCost(values))
                : dispatch(updateCost(values));
              onClose();
            }, 500);
          }}
          validationSchema={validationSchema}
        >
          {(props) => (
            <TransactionForm formikProps={props} initials={initials} />
          )}
        </Formik>
      </div>
    </Modal>
  );
});

export default TransactionModal;
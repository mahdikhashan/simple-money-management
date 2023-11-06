import React from "react";

import classNames from "classnames";
import PropTypes from "prop-types";

import { useField } from "formik";

import "./style.css";

const Input = (props) => {
  const { error, ...restProps } = props;
  return (
    <input
      className={classNames("input", { "input-error": !!error })}
      {...restProps}
    />
  );
};

const InputFormik = (props) => {
  const { label, ...restProps } = props;
  const [field, meta] = useField(props);
  const { error } = meta;

  return (
    <div className="formik-input">
      <label>
        {label}
        <Input {...field} {...restProps} error={error} />
      </label>
      {error ? (
        <div className="error" data-testid={`validation-error-${field.name}`}>
          {error}
        </div>
      ) : null}
    </div>
  );
};

Input.defaultProps = {
  error: false,
  type: "text",
  placeholder: "Text",
};

Input.propTypes = {
  error: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export { InputFormik };
export default Input;

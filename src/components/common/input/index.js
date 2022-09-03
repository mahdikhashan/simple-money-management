import React from "react";

import classNames from 'classnames'
import PropTypes from 'prop-types'

import './style.css'
import { useField } from "formik";

const Input = ({ error, ...props }) => {
  return (
    <>
      <input
        className={classNames('input', {'input-error': !!error})}
        {...props}
      />
    </>
  )
}

const InputFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div className='formik-input'>
        <label>
          {label}
          <Input {...field} {...props} error={meta.error} />
        </label>
        {meta.error ? (
           <div className="error">{meta.error}</div>
         ) : null}
      </div>
    </>
  )
}


Input.defaultProps = {
  error: false,
  type: 'text',
  placeholder: 'Text',
}

Input.propTypes = {
  error: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

export { InputFormik };
export default Input;
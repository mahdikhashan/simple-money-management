import React from "react";

import classNames from 'classnames'
import PropTypes from 'prop-types'

import './style.css'

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

export default Input;
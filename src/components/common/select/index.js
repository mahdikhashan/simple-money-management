import React from "react";

import PropTypes from 'prop-types'

import ArrowUp from '../../../assets/icons/arrow-circle-up-regular.png'
import ArrowUpWhite from '../../../assets/icons/arrow-circle-up-white.png'
import ArrowDown from '../../../assets/icons/arrow-circle-down-regular.png'
import ArrowDownWhite from '../../../assets/icons/arrow-circle-down-white.png'

import './style.css'

const Select = ({ label, id, value, checked, name, variant, onChange }) => {
  const source = variant === "up" ? 
    ( value ? ArrowUpWhite : ArrowUp ) : ( value ? ArrowDownWhite : ArrowDown )

  return (
    <>
      <div className="wrapper">
        <input 
          className={ variant === "up" ? 'variant-up' : 'variant-down' }
          type="radio"
          id={id} 
          name={name} 
          value={value}
          checked={checked}
          onChange={onChange}
          />
        <label for={id}>
          <img 
            src={ source } 
            alt="icon" />
          {label}
        </label>
      </div>
    </>
  )
}

Select.defaultProps = {
  label: 'Text',
  id: 'my_select',
  variant: 'down'
}

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  variant: PropTypes.string,
}

export default Select;
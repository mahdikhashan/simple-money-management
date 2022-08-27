import React, { useState } from "react";

import PropTypes from 'prop-types'

import ArrowUp from '../../../assets/icons/arrow-circle-up-regular.png'
import ArrowUpWhite from '../../../assets/icons/arrow-circle-up-white.png'
import ArrowDown from '../../../assets/icons/arrow-circle-down-regular.png'
import ArrowDownWhite from '../../../assets/icons/arrow-circle-down-white.png'

import './style.css'

const Select = ({ label, id, value, name, variant }) => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = e => setChecked(e.target.checked)

  const source = variant === "up" ? 
    ( checked ? ArrowUpWhite : ArrowUp ) : ( checked ? ArrowDownWhite : ArrowDown )

  return (
    <>
      <div className="wrapper">
        <input 
          className={ variant === "up" ? 'variant-up' : 'variant-down' }
          type="checkbox" 
          id={id} 
          name={name} 
          value={value} 
          checked={checked} 
          onChange={handleCheckboxChange}
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
  checked: null,
  id: 'my_select',
  value: 'selected',
  name: 'my_select',
  variant: 'down'
}

Select.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  id: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.string,
}

export default Select;
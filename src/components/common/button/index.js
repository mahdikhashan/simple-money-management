import React, { useState } from 'react'

import classNames from 'classnames'
import PropTypes from 'prop-types'

import './style.css'

const Button = ({ variant, label, children, search, onClick }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => setHover(true)
  const onMouseExit  = () => setHover(false)

  return (
    <>
      <button
        className={classNames(
          'btn',
          {
            [`btn-${variant}`]: true,
            'btn-search': search,
          }
        )}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseExit}
      >
        {search && <img className={ hover ? 'btn-icon' : 'btn-icon-hover' } alt='search-icont' />}
        {label ?? children ?? 'Button'}
      </button>
    </>
  )
}

Button.defaultProps = {
  variant: 'medium',
  search: false,
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  search: PropTypes.bool,
}

export default Button;
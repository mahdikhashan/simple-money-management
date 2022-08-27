import React from 'react'
import classNames from 'classnames';

import './style.css'

const Card = ({ children, color }) => {
  return (
    <>
      <div
        className={classNames(
          "card",
          {
            [`card-${color}`]: !!color
          }
        )}
      >
        {children}
      </div>
    </>
  )
}

export default Card;
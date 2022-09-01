import React from 'react'
import Card from "../../common/card";

import './style.css'

const TransactionDetails = () => {
  return (
    <>
      <div className='user-details'>
        <Card color="grey">
          <div className='user-detail-header'>
            <span>Enter</span>
            <span><img src={require('../../../assets/icons/arrow-circle-up-regular.png')} alt="icon" /></span>
          </div>
          <div className='user-detail-body'>R$ 17.400,00</div>
        </Card>
        <Card color="grey">
          <div className='user-detail-header'>
            <span>Output</span>
            <span><img src={require('../../../assets/icons/arrow-circle-down-regular.png')} alt="icon" /></span>
          </div>
          <div className='user-detail-body'>R$ 1.259,00</div>
        </Card>
        <Card color="green">
          <div className='user-detail-header'>
            <span>Total</span>
            <span><img src={require('../../../assets/icons/currency-dollar-regular.png')} alt="icon" /></span>
          </div>
          <div className='user-detail-body'>R$ 16.141,00</div>
        </Card>
      </div>
    </>
  )
}

export default TransactionDetails;
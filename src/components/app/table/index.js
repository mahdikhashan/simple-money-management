import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeCost } from "../../../store/cost/slices";

import useModal from "../../../hooks/useModal";
import transactionModal from "../../modals/transaction/transactionModal";

import Pagination from "../../pagination";

import DeleteIcon from '../../../assets/icons/trash-red-regular.png';
import EditIcon from '../../../assets/icons/pen-blue-regular.png';
import EmptyBoxIcon from '../../../assets/icons/empty-box-grey-regular.png';

import classNames from "classnames";

import './style.css';

function Table({ currentItems, header }) {
  const dispatch = useDispatch()
  const [showModal] = useModal(transactionModal)

  return (
    <>
      <table>
        {header && (
          <tr className='table-header'>
            <th className={'table-item-description'}>Description</th>
            <th className={'table-item-price'}>Price</th>
            <th className={'table-item-category'}>Category</th>
            <th className={'table-item-date'}>Date</th>
            <th className={'table-item-edit'}>Edit</th>
          </tr>
        )}
        {
          currentItems.length > 0 ? (currentItems.map((item) => (
            <tr>
              <td className={'table-item-description'}>{item.description}</td>
              <td className={
                classNames(
                [
                    item.transactionType === 'up' ? 'price-input' : 'price-output',
                    'table-item-price'
                  ]
                )
              }
              >
                {`${item.input === false ? '- ':' '} R$`}&nbsp;{parseInt(item.price).toLocaleString()}
              </td>
              <td className={'table-item-category'}>{item.category}</td>
              <td className={'table-item-date'}>{item.date}</td>
              <td className={'table-item-edit'}>
                <div className='table-row-edit'>
                  <button onClick={() => showModal({...item})}>
                    <img src={EditIcon} alt='edit' />
                  </button>
                  <button onClick={() => dispatch(removeCost({id: item.id}))}>
                    <img src={DeleteIcon} alt='delete' />
                  </button>
                </div>
              </td>
            </tr>
          ))) :
          (
            <div className='table-empty-box'>
              <span>
                <img src={EmptyBoxIcon} alt='empty-box' />
                <h4>Nothing Found :(</h4>
              </span>
            </div>
          )
        }
      </table>
    </>
  )
}

function PaginatedTable({ data, itemsPerPage, header, filterByDescription='' }) {
  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset).reverse())
    setPageCount(Math.ceil(data.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, data, filterByDescription])

  const handlePageClick = e => {
    const newOffset = (e.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <Table currentItems={currentItems} header={header} />
      <Pagination
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default PaginatedTable;
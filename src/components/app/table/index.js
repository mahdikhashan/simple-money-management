import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCost } from "../../../store/cost/slices";

import useModal from "../../../hooks/use-modal";
import EditTransactionModal from "../../modals/transaction/EditTransactionModal";

import Pagination from "../../pagination";

import DeleteIcon from '../../../assets/icons/trash-red-regular.png'
import EditIcon from '../../../assets/icons/pen-blue-regular.png'
import EmptyBoxIcon from '../../../assets/icons/empty-box-grey-regular.png'

import classNames from "classnames";

import './style.css'

function Table({ currentItems, header }) {
  const dispatch = useDispatch()
  const [showModal] = useModal(EditTransactionModal)

  return (
    <>
      <table>
        {header && (
          <tr className='table-header'>
            <th>Price</th>
            <th>Category</th>
            <th>Description</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        )}
        {
          currentItems.length > 0 ? (currentItems.map((item) => (
            <tr>
              <td className={'table-item-description'}>{item.description}</td>
              <td className={classNames([item.input ? 'price-input' : 'price-output', 'table-item-price'])}>
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

function PaginatedTable({ itemsPerPage, header, filterByDescription='' }) {
  const costs = useSelector((state) => state.costs)

  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(costs.slice(itemOffset, endOffset).reverse())
    setPageCount(Math.ceil(costs.length / itemsPerPage))
  }, [itemOffset, itemsPerPage, costs, filterByDescription])

  const handlePageClick = e => {
    const newOffset = (e.selected * itemsPerPage) % costs.length
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
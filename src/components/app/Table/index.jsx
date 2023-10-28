import React from "react";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { removeCost } from "@Store/cost/slices";

import useModal from "@Hooks/useModal";
import transactionModal from "@Modals/transaction/TransactionModal";

import Pagination from "@Components/pagination";

import DeleteIcon from "@Assets/icons/trash-red-regular.png";
import EditIcon from "@Assets/icons/pen-blue-regular.png";
import EmptyBoxIcon from "@Assets/icons/empty-box-grey-regular.png";

import classNames from "classnames";

import { v4 as uuid } from "uuid";

import "./style.css";

function Table(props) {
  const { currentItems, header } = props;

  const [showModal] = useModal(transactionModal);
  const dispatch = useDispatch();

  return (
    <table>
      {header && (
        <tr className="table-header">
          <th className={"table-item-description"}>Description</th>
          <th className={"table-item-price"}>Price</th>
          <th className={"table-item-category"}>Category</th>
          <th className={"table-item-date"}>Date</th>
          <th className={"table-item-edit"}>Edit</th>
        </tr>
      )}
      {currentItems.length > 0 ? (
        currentItems.map((item) => (
          <tr key={uuid()}>
            <td className={"table-item-description"}>{item.description}</td>
            <td
              className={classNames([
                item.transactionType === "up" ? "price-input" : "price-output",
                "Table-item-price",
              ])}
            >
              {`${item.input === false ? "- " : " "} R$`}&nbsp;
              {parseInt(item.price).toLocaleString()}
            </td>
            <td className={"table-item-category"}>{item.category}</td>
            <td className={"table-item-date"}>{item.date}</td>
            <td className={"table-item-edit"}>
              <div className="table-row-edit">
                <button onClick={() => showModal({ ...item })}>
                  <img src={EditIcon} alt="edit" />
                </button>
                <button onClick={() => dispatch(removeCost({ id: item.id }))}>
                  <img src={DeleteIcon} alt="delete" />
                </button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <div className="table-empty-box">
          <span>
            <img src={EmptyBoxIcon} alt="empty-box" />
            <h4>Nothing Found :(</h4>
          </span>
        </div>
      )}
    </table>
  );
}

function PaginatedTable(props) {
  const { data, itemsPerPage, header } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset).reverse());
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

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
  );
}

export default PaginatedTable;

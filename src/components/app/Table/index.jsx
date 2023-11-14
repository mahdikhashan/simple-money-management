import React from "react";
import { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import Pagination from "@Components/pagination";

import DeleteIcon from "@Assets/icons/trash-red-regular.png";
import EditIcon from "@Assets/icons/pen-blue-regular.png";
import EmptyBoxIcon from "@Assets/icons/empty-box-grey-regular.png";

import classNames from "classnames";

import "./style.scss";
import "@Styles/router-link-button-override.css";

function Table(props) {
  const { currentItems, header } = props;

  let location = useLocation();

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
        currentItems.map((item, index) => {
          return (
            <tr key={index} data-testid={`transaction-item-${index}`}>
              <td className={"table-item-description"}>{item.description}</td>
              <td
                className={classNames([
                  item.transactionType === "up"
                    ? "price-input"
                    : "price-output",
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
                  <Link
                    key={item.id}
                    className="router-link"
                    to={`/transaction/${item.id}`}
                    state={{ backgroundLocation: location }}
                    data-testid={`transaction-edit-item-${index}`}
                  >
                    <img src={EditIcon} alt="edit" />
                  </Link>
                  <Link
                    key={item.id}
                    className="router-link"
                    to={`/transaction/${item.id}/delete`}
                    state={{ backgroundLocation: location }}
                    data-testid={`transaction-delete-item-${index}`}
                  >
                    <img src={DeleteIcon} alt="delete" />
                  </Link>
                </div>
              </td>
            </tr>
          );
        })
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

  function handlePageClick(e) {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
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
  );
}

export default PaginatedTable;

import React from "react";

import ReactPaginate from "react-paginate";

import "./style.css";

function Pagination(props) {
  return <ReactPaginate {...props} />;
}

export default Pagination;

import React from "react";

import ReactPaginate from "react-paginate";

import "./style.scss";

function Pagination(props) {
  return <ReactPaginate {...props} />;
}

export default Pagination;

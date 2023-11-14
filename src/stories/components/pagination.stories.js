import { default as Pagination } from "@Components/pagination";

export default {
  title: "common/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    breakLabel: "...",
    nextLabel: "",
    pageRangeDisplayed: 5,
    pageCount: 10,
    previousLabel: "",
    renderOnZeroPageCount: null,
  },
};

import React from "react";
import ReactPaginate from "react-paginate";

const pagination = (props) => (
  <ReactPaginate
    previousLabel="Previous"
    nextLabel="Next"
    nextClassName="nextClass"
    nextLinkClassName="Link"
    previousClassName="previousClass"
    previousLinkClassName="Link"
    breakClassName="pageLink"
    breakLabel="..."
    pageCount={props.pageCount}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    onPageChange={props.click}
    containerClassName="paginations"
    subContainerClassName="pages pagination"
    activeClassName="activeLink"
    activeLinkClassName="activeLink"
    pageClassName="pageLink"
    disabledClassName="btnDisabled"
    forcePage={props.currentPage}
  />
);

export default pagination;

import React from 'react';

import ReactPaginate from 'react-paginate';

import './Pagination.css';

const Pagination = () => {
  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='>'
      pageRangeDisplayed={8}
      pageCount={3}
      previousLabel='< '
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName='pagination'
      activeClassName='active'
    />
  );
};

export default Pagination;

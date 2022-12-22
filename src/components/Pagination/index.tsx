import React from 'react';

import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setPageCount } from '../../store/reducers/filterReducer';

import './Pagination.css';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.filter.currentPage);

  const onChangePage = (page: number) => {
    dispatch(setPageCount(page));
  };

  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='>'
      pageRangeDisplayed={3}
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
      forcePage={currentPage - 1}
      onPageChange={(event) => onChangePage(event.selected + 1)}
    />
  );
};

export default Pagination;

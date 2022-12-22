import React, { useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setPageCount } from '../../store/reducers/filterReducer';

import './Pagination.css';
import { itemsPerPage } from '../../constatnts/data';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.filter.currentPage);
  const pizzasCount = 10;

  const [pageNumber, setPageNumber] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const pages: number[] = [];

  if (pizzasCount > 0) {
    for (let i = 1; i <= pizzasCount; i++) {
      pages.push(i);
    }
  }

  useEffect(() => {
    setItemOffset(0);
    setPageNumber(Math.ceil(pages.length / itemsPerPage));
  }, [pizzasCount]);

  useEffect(() => {
    setPageNumber(Math.ceil(pages.length / itemsPerPage));
  }, [itemOffset]);

  const onChangePage = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % pages.length;
    setItemOffset(newOffset);
    dispatch(setPageCount(event.selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel='...'
      nextLabel='>'
      pageRangeDisplayed={3}
      pageCount={pageNumber}
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
      onPageChange={onChangePage}
    />
  );
};

export default Pagination;

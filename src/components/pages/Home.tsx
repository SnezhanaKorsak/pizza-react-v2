import React, { useContext, useEffect, useRef } from 'react';

import { v1 } from 'uuid';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import Categories from '../Categories';
import Sort from '../Sort';
import PizzaSkeleton from '../PizzaBlock/PizzaSkeleton';
import PizzaBlock from '../PizzaBlock';
import Pagination from '../Pagination';
import Error from './Error';

import { SearchContext } from '../../context';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setFilters } from '../../store/reducers/filterReducer';
import { sortingCategories } from '../../constatnts/data';
import { fetchPizzas } from '../../store/reducers/pizzasReducer';
import { selectFilters, selectPizzas } from '../../store/selectors';

const Home = () => {
  const dispatch = useAppDispatch();
  const { categoryId, sort, currentPage } = useAppSelector(selectFilters);
  const { pizzasList, status } = useAppSelector(selectPizzas);

  const { searchValue } = useContext(SearchContext);
  const navigate = useNavigate();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const categoryId = Number(params.categoryId);
      const currentPage = Number(params.currentPage);

      const sort = sortingCategories.find(({ type }) => type === params.sortProperty);

      if (sort) {
        dispatch(setFilters({ categoryId, currentPage, sort }));
      }

      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      const category = categoryId !== 0 ? `category=${categoryId}` : '';
      dispatch(fetchPizzas({ sortType: sort, category, searchValue, currentPage }));
    }

    isSearch.current = false;
  }, [categoryId, sort, searchValue, currentPage]);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify(
        {
          sortProperty: sort.type,
          categoryId,
          currentPage,
        },
        { addQueryPrefix: true },
      );

      navigate(queryString);
    }

    isMounted.current = true;
  }, [categoryId, sort, currentPage]);

  if (status === 'error') {
    return <Error />;
  }

  return (
    <div className='main-container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {status === 'success'
          ? pizzasList.map((pizza) => <PizzaBlock key={pizza.id} pizza={pizza} />)
          : [...new Array(6)].map(() => <PizzaSkeleton key={v1()} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;

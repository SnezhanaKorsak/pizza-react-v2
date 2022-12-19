import React, { useContext, useEffect, useState } from 'react';

import { v1 } from 'uuid';

import Categories from '../Categories';
import Sort from '../Sort';
import PizzaSkeleton from '../PizzaBlock/PizzaSkeleton';
import PizzaBlock from '../PizzaBlock';
import Pagination from '../Pagination';

import { pizzaApi } from '../../api/pizza-api';
import { SearchContext } from '../../context';
import { useAppSelector } from '../../hooks';

import { Pizza } from '../PizzaBlock/types';

const Home = () => {
  const { categoryId, sort } = useAppSelector((state) => state.filter);

  const [pizzaList, setPizzaList] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId !== 0 ? `category=${categoryId}` : '';
    const request = pizzaApi.sortFilteredPizza(sort, category, searchValue);

    request.then().then((res) => {
      setPizzaList(res.data);
      setIsLoading(false);
    });

    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue]);

  return (
    <div className='main-container'>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoading
          ? [...new Array(6)].map(() => <PizzaSkeleton key={v1()} />)
          : pizzaList.map((pizza) => <PizzaBlock key={pizza.id} pizza={pizza} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default Home;

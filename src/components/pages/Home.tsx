import React, { useContext, useEffect, useState } from 'react';

import { v1 } from 'uuid';

import Categories from '../Categories';
import Sort from '../Sort';
import PizzaSkeleton from '../PizzaBlock/PizzaSkeleton';
import PizzaBlock from '../PizzaBlock';
import Pagination from '../Pagination';

import { Pizza } from '../PizzaBlock/types';

import { pizzaApi } from '../../api/pizza-api';
import { SearchContext } from '../../context';

function Home() {
  const [pizzaList, setPizzaList] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [sortType, setSortType] = useState({
    id: 0,
    type: 'популярности (по убыванию)',
    sort: 'rating',
    order: 'desc',
  });
  const [categoryId, setCategoryId] = useState(0);

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId !== 0 ? `category=${categoryId}` : '';
    const request = pizzaApi.sortFilteredPizza(sortType, category, searchValue);

    request.then().then((res) => {
      setPizzaList(res.data);
      setIsLoading(false);
    });

    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  return (
    <div className="main-container">
      <div className="content__top">
        <Categories categoryId={categoryId} setCategoryId={setCategoryId} />
        <Sort sortType={sortType} setSortType={setSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map(() => <PizzaSkeleton key={v1()} />)
          : pizzaList.map((pizza) => <PizzaBlock key={pizza.id} pizza={pizza} />)}
      </div>
      <Pagination />
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';

import { v1 } from 'uuid';

import Categories from '../Categories';
import Sort from '../Sort';
import PizzaSkeleton from '../PizzaBlock/PizzaSkeleton';
import PizzaBlock from '../PizzaBlock';

import { Pizza } from '../PizzaBlock/types';

import { pizzaApi } from '../../api/pizza-api';

function Home() {
  const [pizzaList, setPizzaList] = useState<Pizza[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    pizzaApi.getPizzaData().then((res) => {
      setPizzaList(res.data);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map(() => <PizzaSkeleton key={v1()} />)
          : pizzaList.map((pizza) => <PizzaBlock key={pizza.id} pizza={pizza} />)}
      </div>
      <ul className="Pagination_root__uwB0O">
        <li className="previous disabled">
          <a href="/#" className=" " role="button" aria-disabled="true" aria-label="Previous page" rel="prev">
            &lt;
          </a>
        </li>
        <li className="selected">
          <a href="/#" rel="next" role="button" aria-label="Page 1 is your current page" aria-current="page">
            1
          </a>
        </li>
        <li>
          <a href="/#" rel="next" role="button" aria-label="Page 2">
            2
          </a>
        </li>
        <li>
          <a href="/#" role="button" aria-label="Page 3">
            3
          </a>
        </li>
        <li className="next">
          <a href="/#" className="" role="button" aria-disabled="false" aria-label="Next page" rel="next">
            &gt;
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
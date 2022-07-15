import React from 'react';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import './scss/app.scss';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Маргарита" price={450} />
            <PizzaBlock title="Четыре сезона" price={395} />
            <PizzaBlock title="Пепперони" price={675} />
            <PizzaBlock title="Чизбургер-пицца" price={415} />
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
      </div>
    </div>
  );
}

export default App;

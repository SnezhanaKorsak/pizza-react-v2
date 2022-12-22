import React from 'react';

import { pizzaCategories } from '../../constatnts/data';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCategoryId } from '../../store/reducers/filterReducer';

const Categories = () => {
  const dispatch = useAppDispatch();
  const categoryId = useAppSelector((state) => state.filter.categoryId);

  const clickHandler = (id: number) => () => dispatch(setCategoryId(id));

  return (
    <div className='categories'>
      <ul>
        {pizzaCategories.map(({ id, category }) => (
          <li
            key={id}
            onClick={clickHandler(id)}
            className={categoryId === id ? 'active' : ''}
            role='presentation'
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

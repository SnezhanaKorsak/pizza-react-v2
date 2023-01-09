import React from 'react';

import { pizzaCategories } from '../../constatnts/data';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCategoryId } from '../../store/reducers/filterReducer';
import { selectFilters } from '../../store/selectors';

const Categories = React.memo(() => {
  const dispatch = useAppDispatch();
  const { categoryId } = useAppSelector(selectFilters);

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
});

Categories.displayName = 'Categories';

export default Categories;

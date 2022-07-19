import React from 'react';
import { pizzaCategories } from '../../constatnts/data';

import { CategoriesProps } from './types';

function Categories({ categoryId, setCategoryId }: CategoriesProps) {
  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map(({ id, category }) => (
          <li
            key={id}
            onClick={() => setCategoryId(id)}
            className={categoryId === id ? 'active' : ''}
            role="presentation"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

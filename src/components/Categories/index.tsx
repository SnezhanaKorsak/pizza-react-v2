import React, { useState } from 'react';
import { pizzaCategories } from '../../constatnts/data';

function Categories() {
  const [active, setActive] = useState(1);

  const activeHandler = (id: number) => setActive(id);

  return (
    <div className="categories">
      <ul>
        {pizzaCategories.map(({ id, category }) => (
          <li key={id} onClick={() => activeHandler(id)} className={active === id ? 'active' : ''} role="presentation">
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

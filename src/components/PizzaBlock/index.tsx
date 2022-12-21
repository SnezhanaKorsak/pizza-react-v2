import React, { useState } from 'react';

import { useAppDispatch } from '../../hooks';
import { setPizza } from '../../store/cartReducer';

import { PizzaBlockProps } from './types';
import { PizzaInCart, pizzaTypes, SizesProperty, TypesProperty } from '../../types';
import { getItemCartPrice } from '../../utils';

const PizzaBlock: React.FC<PizzaBlockProps> = ({ pizza }) => {
  const dispatch = useAppDispatch();

  const [activeSize, setActiveSize] = useState<SizesProperty>(26);
  const [activeType, setActiveType] = useState<TypesProperty>(0);

  const { id, title, price, types, sizes, imageUrl, category, rating } = pizza;
  const currentId = `${id}-${activeType}-${activeSize}`;
  const priceByConditions = getItemCartPrice(price, activeSize, activeType);

  const pizzaToCart: PizzaInCart = {
    imageUrl,
    title,
    price,
    category,
    rating,
    id: currentId,
    count: 1,
    totalPrice: priceByConditions,
    type: activeType,
    size: activeSize,
  };

  const addPizzaToCart = () => dispatch(setPizza(pizzaToCart));

  return (
    <div className='pizza-block-wrapper'>
      <div className='pizza-block'>
        <a href='/pizza/4'>
          <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
          <h4 className='pizza-block__title'>{title}</h4>
        </a>
        <div className='pizza-block__selector'>
          <ul>
            {types.map((type) => (
              <li
                key={type}
                onClick={() => setActiveType(type as TypesProperty)}
                className={activeType === type ? 'active' : ''}
                role='presentation'
              >
                {pizzaTypes[String(type)]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size) => (
              <li
                key={size}
                onClick={() => setActiveSize(size as SizesProperty)}
                className={activeSize === size ? 'active' : ''}
                role='presentation'
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className='pizza-block__bottom'>
          <div className='pizza-block__price'>{priceByConditions} ₽</div>

          <button
            type='button'
            className='button button--outline button--add'
            onClick={addPizzaToCart}
          >
            <svg
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0
                6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2
                10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                fill='white'
              />
            </svg>
            <span>Добавить</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;

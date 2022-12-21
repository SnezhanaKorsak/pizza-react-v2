import React from 'react';

import RemoveButton from '../../assets/components/RemoveButton';
import PlusButton from '../../assets/components/PlusButton';
import MinusButton from '../../assets/components/MinusButton';

import { useAppSelector } from '../../hooks';

import { CartItemProps } from './types';
import { PizzaInCart, pizzaTypes } from '../../types';

const CartItem: React.FC<CartItemProps> = ({ itemId }) => {
  const { order } = useAppSelector((state) => state.cart);

  const currentPizza = order.find(({ id }) => id === itemId);

  if (!currentPizza) {
    return null;
  }

  const { id, title, type, size, imageUrl, count, totalPrice }: PizzaInCart = currentPizza;

  return (
    <div className='content__items'>
      <div className='cart__item'>
        <div className='cart__item-img'>
          <img className='pizza-block__image' src={imageUrl} alt='Pizza' />
        </div>
        <div className='cart__item-info'>
          <h3>{title}</h3>
          <p>{`${pizzaTypes[String(type)]}, ${size} см`}</p>
        </div>

        <div className='cart__item-count'>
          <MinusButton id={id} />
          <b>{count}</b>
          <PlusButton id={id} />
        </div>

        <div className='cart__item-price'>
          <b>{`${totalPrice} ₽`}</b>
        </div>

        <RemoveButton id={id} />
      </div>
    </div>
  );
};

export default CartItem;

import React from 'react';

import CartHeader from '../cart/CartHeader';
import CartItem from '../cart/CartItem';
import CartButtons from '../cart/CartButtons';

import { useAppSelector } from '../../hooks';
import CartEmpty from '../cart/CartEmpty';

const Cart = () => {
  const { totalCartPrice, totalPizzasCount, order } = useAppSelector((state) => state.cart);

  const mappedItems = order.map(({ id }) => <CartItem key={id} itemId={id} />);

  const isEmptyCart = mappedItems.length === 0;

  if (isEmptyCart) {
    return <CartEmpty />;
  }

  return (
    <div className='main-container'>
      <div className='container container--cart'>
        <div className='cart'>
          <CartHeader />

          {mappedItems}

          <div className='cart__bottom'>
            <div className='cart__bottom-details'>
              <span>
                Всего пицц: <b>{`${totalPizzasCount} шт.`}</b>
              </span>
              <span>
                Сумма заказа: <b>{`${totalCartPrice} ₽`}</b>
              </span>
            </div>

            <CartButtons isEmptyCart={isEmptyCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React from 'react';

import CartHeader from '../cart/CartHeader';
import CartItems from '../cart/CartItems';
import CartButtons from '../cart/CartButtons';

const Cart = () => {
  return (
    <div className='main-container'>
      <div className='container container--cart'>
        <div className='cart'>
          <CartHeader />
          <CartItems />

          <div className='cart__bottom'>
            <div className='cart__bottom-details'>
              <span>
                Всего пицц: <b>3 шт.</b>
              </span>
              <span>
                Сумма заказа: <b>1520 ₽</b>
              </span>
            </div>

            <CartButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

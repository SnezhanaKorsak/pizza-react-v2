import React from 'react';
import RemoveButton from '../../assets/components/RemoveButton';
import PlusButton from '../../assets/components/PlusButton';
import MinusButton from '../../assets/components/MinusButton';

const CartItems = () => {
  return (
    <div className='content__items'>
      <div className='cart__item'>
        <div className='cart__item-img'>
          <img
            className='pizza-block__image'
            src='https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg'
            alt='Pizza'
          />
        </div>
        <div className='cart__item-info'>
          <h3>Маргарита</h3>
          <p>тонкое, 26 см.</p>
        </div>

        <div className='cart__item-count'>
          <MinusButton />
          <b>1</b>
          <PlusButton />
        </div>

        <div className='cart__item-price'>
          <b>450 ₽</b>
        </div>

        <RemoveButton />
      </div>
    </div>
  );
};

export default CartItems;

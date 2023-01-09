import React from 'react';
import { Link } from 'react-router-dom';

const CartButtons: React.FC<{ isEmptyCart: boolean }> = React.memo(({ isEmptyCart }) => {
  const classNameLink = 'button button--outline button--add go-back-btn';
  const finalClassNameLink = isEmptyCart ? `${classNameLink} active` : classNameLink;

  return (
    <div className='cart__bottom-buttons'>
      <Link className={finalClassNameLink} to='/'>
        <svg
          width='8'
          height='14'
          viewBox='0 0 8 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M7 13L1 6.93015L6.86175 1'
            stroke='#D3D3D3'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span>Вернуться назад</span>
      </Link>
      {!isEmptyCart && (
        <div className='button pay-btn'>
          <span>Оплатить сейчас</span>
        </div>
      )}
    </div>
  );
});

CartButtons.displayName = 'CartButtons';

export default CartButtons;

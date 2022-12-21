import React from 'react';

import styles from './styles.module.scss';
import emptyImg from '../../assets/images/empty-cart.png';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  const classNameLink = 'button button--outline button--add go-back-btn active';

  return (
    <div className={styles.container}>
      <img src={emptyImg} alt='empty' className={styles.image} />
      <div className='cart__bottom-buttons'>
        <Link className={classNameLink} to='/'>
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
      </div>
    </div>
  );
};

export default CartEmpty;

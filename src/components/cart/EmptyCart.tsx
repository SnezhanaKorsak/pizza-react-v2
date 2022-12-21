import React from 'react';

import styles from './styles.module.scss';

const EmptyCart = () => {
  return (
    <div className={styles.container}>
      Корзина пуста. Нажмите на кнопку <strong>Вернуться назад</strong>, чтобы сделать свой первый
      заказ
    </div>
  );
};

export default EmptyCart;

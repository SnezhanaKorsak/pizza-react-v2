import React from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../../hooks';
import { selectCurrentPizzaFromList } from '../../../store/selectors';

import { Pizza } from '../../../types';
import styles from './styles.module.scss';

const FullPizza = () => {
  const { id } = useParams();

  const pizzaId = id ?? 0;

  const pizza = useAppSelector<Pizza | undefined>(selectCurrentPizzaFromList(+pizzaId));

  if (!pizza) {
    return null;
  }

  const { title, sizes, price, imageUrl } = pizza;

  return (
    <div className={styles.container}>
      <div className={styles.view}>
        <h4 className='pizza-block__title'>{title}</h4>
        <img className={styles.pizzaImage} src={imageUrl} alt='Pizza' />
      </div>
      <div className={styles.selector}>
        <h3>Виды теста</h3>
        <ul>
          <li role='presentation'>Тонкое тесто</li>
          <li role='presentation'>Традиционно тесто</li>
        </ul>
      </div>
      <div className={styles.selector}>
        <h3>Размеры</h3>
        <ul className={styles.sizes}>
          {sizes.map((size) => (
            <li key={size} role='presentation'>
              {size} см.
            </li>
          ))}
        </ul>
      </div>

      <h3 className={styles.price}>Цена от {price} ₽</h3>
    </div>
  );
};

export default FullPizza;

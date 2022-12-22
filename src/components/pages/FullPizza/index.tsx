import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Pizza } from '../../../types';
import styles from './styles.module.scss';
import { getCurrentPizza } from '../../../servers';

const FullPizza = () => {
  const { id } = useParams();
  const [currentPizza, setCurrentPizza] = useState<Pizza | null>(null);
  const pizzaId = id ?? '';

  useEffect(() => {
    getCurrentPizza(pizzaId).then((res) => setCurrentPizza(res.data));
  }, []);

  if (!currentPizza) {
    return null;
  }

  const { title, sizes, price, imageUrl } = currentPizza;

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

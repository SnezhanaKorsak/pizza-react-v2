import React from 'react';

import style from './styles.module.scss';

function NotFound() {
  return (
    <div className={style.container}>
      <span className={style.emoji}>😕</span>
      <h1>Ничего не найдено :(</h1>
      <p className={style.description}>К сожалению, данная страница отсутствует в нашем магазине</p>
    </div>
  );
}

export default NotFound;

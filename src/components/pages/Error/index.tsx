import React from 'react';

import style from './styles.module.scss';

const Error = () => {
  return (
    <div className={style.container}>
      <span className={style.emoji}>😕</span>
      <h1>Что-то пошло не так :(</h1>
      <p className={style.description}>К сожалению, данная страница не доступна.</p>
      <p className={style.description}>Проверьте подключение и попробуйте еще</p>
    </div>
  );
};

export default Error;

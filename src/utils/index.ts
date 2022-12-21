import { PizzaInCart } from '../types';

const startSize = 26;

export const getTotalPrice = (order: PizzaInCart[]) => {
  return order.reduce((total, pizza) => total + pizza.totalPrice, 0);
};

export const getItemCartPrice = (price: number, size: number, type: number) => {
  const sizeRatio = +(size / startSize).toFixed(2);
  const weightRatio = type === 0 ? 1 : 1.5;

  return Math.round((price * sizeRatio * weightRatio) / 10) * 10;
};

export const getTotalCount = (order: PizzaInCart[]) => {
  return order.reduce((total, pizza) => total + pizza.count, 0);
};

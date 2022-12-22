import { pizzaApi } from '../api/pizza-api';

export const getCurrentPizza = async (id: string) => {
  console.log(id);
  return await pizzaApi.getPizza(id);
};

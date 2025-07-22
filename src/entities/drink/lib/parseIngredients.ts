import { Drink } from '@/features/cocktail/types';

export const parseIngredients = (drink: Drink): string[] => {
  const ingredients: string[] = [];

  for (let i = 1; i <= 15; i++) {
    const name = drink[`strIngredient${i}`];
    if (name) {
      ingredients.push(name);
    }
  }

  return ingredients;
};

import { CocktailAPIResponse } from './types';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const fetchCocktailsByCode = async (code: string): Promise<CocktailAPIResponse> => {
  const res = await fetch(`${BASE_URL}${code}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return res.json();
};

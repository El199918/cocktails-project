export interface Drink {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
  strCategory: string;
  strGlass: string;
  strAlcoholic: string;
  [key: string]: string | null;
}

export interface CocktailAPIResponse {
  drinks: Drink[] | null;
}

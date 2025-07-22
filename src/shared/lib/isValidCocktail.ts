import { COCKTAIL_CODES } from '@/shared/config/routes';

export const isValidCocktail = (code: string): code is (typeof COCKTAIL_CODES)[number] => {
  return COCKTAIL_CODES.includes(code as any);
};

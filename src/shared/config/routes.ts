export const COCKTAIL_CODES = ['margarita', 'mojito', 'a1', 'kir'] as const;

export const DEFAULT_COCKTAIL = COCKTAIL_CODES[0]; // 'margarita'

export const ROUTES = {
  root: '/',
  cocktail: (name: string) => `/${name}`,
  notFound: '*',
};

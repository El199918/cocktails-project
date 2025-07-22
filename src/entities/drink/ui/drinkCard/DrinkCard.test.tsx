import { render, screen } from '@testing-library/react';
import DrinkCard from './DrinkCard';
import { Drink } from '@/features/cocktail/types';

const mockDrink = {
  idDrink: '1',
  strDrink: 'Test Drink',
  strInstructions: 'Mix and serve.',
  strDrinkThumb: 'https://example.com/image.jpg',
  strIngredient1: 'Vodka',
  strIngredient2: 'Lime',
  strIngredient3: null,
  strCategory: 'Cocktail',
  strGlass: 'Jar',
  strAlcoholic: 'Highball glass',
} as Drink;

describe('DrinkCard', () => {
  it('renders drink info', () => {
    render(<DrinkCard drink={mockDrink} />);

    expect(screen.getByText('Test Drink')).toBeInTheDocument();
    expect(screen.getByText('Mix and serve.')).toBeInTheDocument();
    expect(screen.getByAltText('Test Drink')).toHaveAttribute('src', mockDrink.strDrinkThumb);
    expect(screen.getByText('Vodka')).toBeInTheDocument();
    expect(screen.getByText('Lime')).toBeInTheDocument();
  });
});

import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import MenuNav from './MenuNav';
import { COCKTAIL_CODES } from '@/shared/config/routes';

describe('MenuNav', () => {
  it('renders all cocktail links', () => {
    render(
      <MemoryRouter>
        <MenuNav />
      </MemoryRouter>
    );

    COCKTAIL_CODES.forEach((code) => {
      expect(screen.getByText(code.toUpperCase())).toBeInTheDocument();
    });
  });
});

import { Drink } from '@/features/cocktail/types';
import { parseIngredients } from '../../lib/parseIngredients';
import './DrinkCard.scss';

interface Props {
  drink: Drink;
}

const DrinkCard = ({ drink }: Props) => {
  const ingredients = parseIngredients(drink);

  return (
    <div className="drink-card">
      <div className="drink-card__content">
        <h3 className="drink-card__title">{drink.strDrink}</h3>
        <p className="drink-card__meta">
          {drink.strCategory} • {drink.strGlass} • {drink.strAlcoholic}
        </p>
        <p className="drink-card__desc">{drink.strInstructions}</p>
        <ul className="drink-card__ingredients">
          {ingredients.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        loading="lazy"
        className="drink-card__image"
      />
    </div>
  );
};

export default DrinkCard;

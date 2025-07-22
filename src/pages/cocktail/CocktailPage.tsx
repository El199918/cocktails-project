import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useCocktailStore } from '@/features/cocktail/cocktailStore';
import DrinkCard from '@/entities/drink/ui/drinkCard/DrinkCard';
import { DEFAULT_COCKTAIL } from '@/shared/config/routes';
import { isValidCocktail } from '@/shared/lib/isValidCocktail';

const CocktailPage = () => {
  const { name } = useParams();

  const { data, fetchCocktails, loading, error } = useCocktailStore();

  useEffect(() => {
    if (name) {
      fetchCocktails(name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  if (!name) return null;

  if (!isValidCocktail(name)) {
    return <Navigate to={`/${DEFAULT_COCKTAIL}`} replace />;
  }

  const drinks = data[name];

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  if (!Array.isArray(drinks) || drinks.length === 0) return <p>Нет коктейлей</p>;

  return (
    <div>
      <h2>{name.toUpperCase()}</h2>
      {drinks.map((drink) => (
        <DrinkCard key={drink.idDrink} drink={drink} />
      ))}
    </div>
  );
};

export default CocktailPage;

import { Route, Routes, Navigate } from 'react-router-dom';
import CocktailPage from '@/pages/cocktail/CocktailPage';
import NotFoundPage from '@/pages/not-found/NotFoundPage';
import Layout from '@/widgets/layout/Layout';
import { DEFAULT_COCKTAIL } from '@/shared/config/routes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${DEFAULT_COCKTAIL}`} replace />} />
      <Route
        path="/:name"
        element={
          <Layout>
            <CocktailPage />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFoundPage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRouter;

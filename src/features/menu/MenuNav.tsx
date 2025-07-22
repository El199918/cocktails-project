import { NavLink } from 'react-router-dom';
import { COCKTAIL_CODES } from '@/shared/config/routes';
import './MenuNav.scss';

const MenuNav = () => {
  return (
    <nav className="menu">
      {COCKTAIL_CODES.map((code) => (
        <NavLink
          key={code}
          to={`/${code}`}
          className={({ isActive }) => (isActive ? 'menu__item menu__item--active' : 'menu__item')}
        >
          {code.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
};

export default MenuNav;

import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 *
 * - Якщо маршрут приватний і користувач увійшов у систему, відтворіть компонент
 * - В іншому випадку візуалізувати <Navigate> для перенаправлення
 */

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

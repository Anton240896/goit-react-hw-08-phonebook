import { useAuth } from 'hooks/useAuth';
import { Nav, Contacts } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Nav to="/">Home</Nav>
      {isLoggedIn && <Contacts to="/contacts">Contacts</Contacts>}
    </nav>
  );
};

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { NameUser, ContUser, ButtonLogout } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <ContUser>
      <NameUser>Welcome! {user.name}</NameUser>
      <ButtonLogout type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonLogout>
    </ContUser>
  );
};

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Button } from 'components/RegisterForm/RegisterForm.styled';
import { NameUser, ContUser } from './UserMenu.styled';
// import { ContainerMain } from 'pages/Home.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <ContUser>
      <NameUser>Welcome! {user.name} </NameUser>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </ContUser>
  );
};

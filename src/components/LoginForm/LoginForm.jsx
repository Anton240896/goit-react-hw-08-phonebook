import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormRegister,
  LabelName,
  Button,
  InputRegister,
  InputEmail,
  Message,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <LabelName>
        Email
        <InputEmail type="email" name="email" placeholder="Enter email..." />
      </LabelName>
      <LabelName>
        Password
        <InputRegister
          type="password"
          name="password"
          placeholder="Enter password..."
        />
      </LabelName>
      <Button type="submit">Log In</Button>
      <Message>
        <b>
          <p>If you are registered, enter your email and password ⌨️ </p>
        </b>
      </Message>
    </FormRegister>
  );
};

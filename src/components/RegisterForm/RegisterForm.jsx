import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormRegister,
  LabelName,
  Button,
  InputRegister,
  InputEmail,
  Message,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <LabelName>
        Username
        <InputRegister
          type="text"
          name="name"
          placeholder="Enter username..."
        />
      </LabelName>
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
      <Button type="submit">Register</Button>
      <Message>
        <b>
          <p>Here you can register 🖊!</p>
        </b>
      </Message>
    </FormRegister>
  );
};

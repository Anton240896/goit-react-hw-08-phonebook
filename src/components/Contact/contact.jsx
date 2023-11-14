import { ContactContainer, ContactName } from './contact.styled';
import { Button } from 'components/RegisterForm/RegisterForm.styled';

import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactContainer>
      <ContactName key={id}>
        {name}: {number}
      </ContactName>
      <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </Button>
    </ContactContainer>
  );
};

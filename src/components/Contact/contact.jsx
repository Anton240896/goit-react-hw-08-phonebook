import { ContactContainer, ContactName, ButtonDelete } from './contact.styled';

import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactContainer>
      <ContactName key={id}>
        {name} : {number}
      </ContactName>
      <ButtonDelete type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </ButtonDelete>
    </ContactContainer>
  );
};

import { Contact } from 'components/Contact/Contact';
import { ContactListStyled } from './сontactList.styled';
import { selectContacts } from 'redux/contacts/selectors';
import { selectFilter } from 'redux/filter/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ContactListStyled>
      {filterContacts().map(({ name, number, id }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ContactListStyled>
  );
};

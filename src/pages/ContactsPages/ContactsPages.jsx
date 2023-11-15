import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/сontactList';
import { ContactForm } from 'components/ContactForm/contactForm';
import { Filter } from 'components/Filter/FilterContacts';

import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

import { Message } from './ContactsPages.styled';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm />
      <Message>{isLoading && 'Request in progress...'}</Message>
      <Filter />
      <ContactList />
    </>
  );
}

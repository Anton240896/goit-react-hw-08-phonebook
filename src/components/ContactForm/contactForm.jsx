import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';
import {
  ButtonAddContact,
  LabelStyled,
  ContContacts,
} from './contactForm.styled';
import toast from 'react-hot-toast';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// solution 2 with library Formic
/*======== FORMIK =======*/
const PhoneBookSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'The name is too short!')
    .max(25, 'The name is too long!')
    .required('Name is required!'),
  number: Yup.string()
    .min(2, 'The number is too short!')
    .max(20, 'The number is too long!')
    .required('Phone number is required!'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={PhoneBookSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        if (
          !contacts.find(
            contact => contact.name.toLowerCase() === values.name.toLowerCase()
          )
        ) {
          dispatch(addContacts(values));
        } else {
          toast.success(`${values.name} added to the phonebook`);
        }
      }}
    >
      {() => (
        <Form>
          <ContContacts>
            <LabelStyled htmlFor="name">Contacts</LabelStyled>
            <Field name="name" type="text" placeholder="Enter name..." />

            <LabelStyled htmlFor="number">Phone</LabelStyled>
            <Field name="number" type="text" placeholder="Enter number..." />
          </ContContacts>

          <ButtonAddContact type="submit">Add contact</ButtonAddContact>
        </Form>
      )}
    </Formik>
  );
};

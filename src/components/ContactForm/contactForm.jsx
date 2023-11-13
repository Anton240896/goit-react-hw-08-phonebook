import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';
import { Button, LabelStyled } from './contactForm.styled';
import { HiPhoneOutgoing } from 'react-icons/hi';
import toast from 'react-hot-toast';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';

//solution 1

//   /*======== GENERATION ID =======*/
const nameInputId = nanoid();
const numberInputId = nanoid();

//   /*======== ADD FORM =======*/
export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  //   /*======== PROCESSING FORM =======*/
  const handleSubmit = evt => {
    evt.preventDefault();

    //   /*======== IF THE CONTACT ALREADY EXISTS, A MESSAGE IS DISPLAYED  =======*/
    const contactsExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactsExist) {
      toast.info(`${name} added to the phonebook`);
      return;
    }

    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <HiPhoneOutgoing size={100} />
      <LabelStyled>
        Name
        <input
          type="text"
          name="text"
          value={name}
          onChange={handleChange}
          placeholder="Enter contacts..."
        />
      </LabelStyled>

      <LabelStyled>
        Phone
        <input
          type="text"
          name="name"
          value={number}
          onChange={handleChange}
          placeholder="Enter numbers..."
        />
      </LabelStyled>
      <Button type="submit">Add contact</Button>
    </form>
  );
};

// solution 2 with library Formic
// /*======== FORMIK =======*/
// const PhoneBookSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(1, 'The name is too short!')
//     .max(25, 'The name is too long!')
//     .required('Name is required!'),
//   number: Yup.string()
//     .min(2, 'The number is too short!')
//     .max(20, 'The number is too long!')
//     .required('Phone number is required!'),
// });

// export const ContactForm = () => {
//   const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         number: '',
//       }}
//       validationSchema={PhoneBookSchema}
//       onSubmit={(values, actions) => {
//         actions.resetForm();
//         if (
//           !contacts.find(
//             contact => contact.name.toLowerCase() === values.name.toLowerCase()
//           )
//         ) {
//           dispatch(addContacts(values));
//         } else {
//           toast.success(`${values.name} added to the phonebook`);
//         }
//       }}
//     >
//       {() => (
//         <Form>
//           <HiPhoneOutgoing size={100} />
//           <LabelStyled htmlFor="name">Contacts</LabelStyled>
//           <Field name="name" type="text" placeholder="Enter name..." />

//           <LabelStyled htmlFor="number">Phone</LabelStyled>
//           <Field name="number" type="text" placeholder="Enter number..." />

//           <Button type="submit">Add contact</Button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

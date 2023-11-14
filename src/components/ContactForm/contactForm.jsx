// import { useState } from 'react';
// import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';

import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';
import { ButtonAddContact } from './contactForm.styled';
import toast from 'react-hot-toast';
import {
  FormRegister,
  LabelName,
  InputRegister,
} from 'components/RegisterForm/RegisterForm.styled';

import { Formik } from 'formik';
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
        <FormRegister>
          <LabelName htmlFor="name">Contacts</LabelName>
          <InputRegister name="name" type="text" placeholder="Enter name..." />

          <LabelName htmlFor="number">Phone</LabelName>
          <InputRegister
            name="number"
            type="text"
            placeholder="Enter number..."
          />

          <ButtonAddContact type="submit">Add contact</ButtonAddContact>
        </FormRegister>
      )}
    </Formik>
  );
};

// //solution 2

// //   /*======== GENERATION ID =======*/
// const nameInputId = nanoid();
// const numberInputId = nanoid();

// //   /*======== ADD FORM =======*/
// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   //   /*======== PROCESSING FORM =======*/
//   const handleSubmit = evt => {
//     evt.preventDefault();

//     //   /*======== IF THE CONTACT ALREADY EXISTS, A MESSAGE IS DISPLAYED  =======*/
//     const contactsExist = contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (contactsExist) {
//       toast.info(`${name} added to the phonebook`);
//       return;
//     }

//     dispatch(addContacts({ name, number }));
//     setName('');
//     setNumber('');
//   };

//   const handleChange = event => {
//     const { name, value } = event.currentTarget;

//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   return (
//     <FormRegister onSubmit={handleSubmit}>
//       <LabelName htmlFor={nameInputId}>
//         Name
//         <InputRegister
//           type="text"
//           name="text"
//           value={name}
//           onChange={handleChange}
//           placeholder="Enter contacts..."
//         />
//       </LabelName>

//       <LabelName htmlFor={numberInputId}>
//         Phone
//         <InputRegister
//           type="text"
//           name="name"
//           value={number}
//           onChange={handleChange}
//           placeholder="Enter numbers..."
//         />
//       </LabelName>
//       <Button type="submit">Add contact</Button>
//     </FormRegister>
//   );
// };

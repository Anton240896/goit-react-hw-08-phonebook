import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refreshUser } from 'redux/auth/operations';

import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useAuth } from 'hooks/useAuth';

//   /*======== IMPORT-LAZY =======*/
const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/ContactsPages/ContactsPages'));

//   /*======== APP =======*/
export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  //   /*======== RENDER =======*/
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};

//   /*======== PREVIOUS WORK =======*/

// import React from 'react';
// import { useEffect } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/operations';
// import { selectIsLoading, selectError } from 'redux/selectors';

// import { ContactForm } from 'components/ContactForm/contactForm';
// import { ContactList } from 'components/ContactList/contactList';
// import { Filter } from 'components/Filter/filter';
// import {
//   ContactFilter,
//   Container,
//   PhonebookName,
//   Contacts,
//   Main,
// } from './App.styled';

// import { VscNotebook } from 'react-icons/vsc';

// /*======== REDUX =======*/
// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   /*======== RENDER =======*/
//   return (
//     <Main>
//       <section>
//         <VscNotebook size={400} style={{ marginTop: '60px' }} />
//         <Container>
//           <PhonebookName>Phonebook</PhonebookName>
//           <ContactForm />

//           <ContactFilter>
//             <Contacts>Contacts</Contacts>
//             <Filter />
//           </ContactFilter>

//           {isLoading && !error && <b>Request in progress...</b>}

//           <ContactList />
//         </Container>
//       </section>
//     </Main>
//   );
// };

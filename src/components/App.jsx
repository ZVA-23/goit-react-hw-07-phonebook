import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

// import { useSelector, useDispatch } from 'react-redux';
// import { selectedContacts } from 'redux/selectors';
// import { addContact, deleteContact } from 'redux/contactsSlice';
// import { setFilter } from 'redux/filterSlice';
// import { nanoid } from 'nanoid';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

// export const App = () => {
//   const contacts = useSelector(selectedContacts);
//   const dispatch = useDispatch();

//   const addNewContact = newContact => {
//     const searchName = contacts
//       .map(contact => contact.name)
//       .includes(newContact.name);
//     if (searchName) {
//       alert(`${newContact.name} is already in contacts`);
//     } else {
//       const contact = {
//         id: nanoid(),
//         ...newContact,
//       };
//       dispatch(addContact(contact));
//     }
//   };

//   const onFilterContacts = filter => {
//     dispatch(setFilter(filter));
//   };

//   const onDeleteContact = id => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addNewContact} />
//       <h2>Contacts</h2>
//       <Filter onFilterContacts={onFilterContacts} />
//       <ContactList onDeleteContact={onDeleteContact} />
//     </div>
//   );
// };

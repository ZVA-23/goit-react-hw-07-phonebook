import { useSelector, useDispatch } from 'react-redux';
import { selectedContacts, selectedFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectedContacts);
  const filter = useSelector(selectedFilter);
  console.log(contacts);
  return (
    <ul>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <li key={contact.id} className={css.contactList}>
            <p>
              <span className={css.spanList}>{contact.name}:</span>{' '}
              {contact.number}
            </p>
            <button
              className={css.btnList}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

// import { useSelector } from 'react-redux';
// import { selectedContacts, selectedFilter } from 'redux/selectors';
// import PropTypes from 'prop-types';
// import css from './ContactList.module.css';

// export const ContactList = ({ onDeleteContact }) => {
//   const contacts = useSelector(selectedContacts);
//   const filter = useSelector(selectedFilter);
//   console.log(contacts);
//   return (
//     <ul>
//       {contacts
//         .filter(contact => contact.name.toLowerCase().includes(filter))
//         .map(contact => (
//           <li key={contact.id} className={css.contactList}>
//             <p>
//               <span className={css.spanList}>{contact.name}:</span>{' '}
//               {contact.number}
//             </p>
//             <button
//               className={css.btnList}
//               type="button"
//               onClick={() => onDeleteContact(contact.id)}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//     </ul>
//   );
// };

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
// };

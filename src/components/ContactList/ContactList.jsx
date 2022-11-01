import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/filter/filterSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { deleteContact } from 'redux/contacts/contactsOperations';
import css from './ContactList.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <ul>
      {visibleContacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(({ name, number, id }) => (
          <li key={id} className={css.contactList}>
            <p>
              <span className={css.spanList}>{name}:</span> {number}
            </p>
            <button
              className={css.btnList}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

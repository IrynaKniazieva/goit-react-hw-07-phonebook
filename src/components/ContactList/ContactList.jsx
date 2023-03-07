import { useSelector, useDispatch } from 'react-redux';

import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';
import { fetchDeleteContact } from 'redux/contacts/contacts-operations';

import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <li key={id} className={styles.contactItem}>
          {name} : <span>{number}</span>
          <button className={styles.button} onClick={() => dispatch(fetchDeleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

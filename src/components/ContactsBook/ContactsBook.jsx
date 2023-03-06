import { useEffect } from 'react';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

import styles from './ContactsBook.module.css'

import {fetchAllContacts} from "../../redux/contacts/contacts-operations"

import { useDispatch, useSelector } from 'react-redux';

const ContactsBook = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector();
  // const error = useSelector(); 

  useEffect(() => {
    dispatch(fetchAllContacts());
  },[dispatch]);

  return (
    <div className={styles.sectionContacts}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsBook;

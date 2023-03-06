import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './ContactForm.module.css';

import { getAllContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-slice';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

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


  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name,
      number,
      id: nanoid(),
    };

 
    const checkContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase());

    checkContact
      ? alert(`${name} is already in contacts`)
      : dispatch(addContact(contact)) && reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <label className={styles.contactLabel}>
        Name
        <input
          className={styles.contactInputName}
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.contactLabel}>
        Number
        <input
          className={styles.contactInputNumber}
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={styles.buttonAdd} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
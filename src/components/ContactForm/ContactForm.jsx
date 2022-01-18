import { useState } from "react";
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from "../../redux/contacts/api";
import s from "./ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading, error }] = useAddContactMutation();
  const handleChange = ({ target }) => {
    const { name, value } = target;
    name === "name" ? setName(value) : setNumber(value);
  };

  function reset() {
    setName("");
    setNumber("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const contact = {
      name: e.currentTarget.name.value,
      number: e.currentTarget.number.value,
    };
    if (
      contacts.some((contact) => {
        return contact.name.toLowerCase() === name.toLowerCase();
      })
    ) {
      alert(name + " is already in contacts.");
      return;
    } else {
      addContact(contact);
    }
    reset();
  }

  return (
    <div>
      {error && <p>Cannot add new contact</p>}
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label className={s.label}>
          Name:
          <input
            type="text"
            name="name"
            className={s.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
          ></input>
        </label>
        <label className={s.label}>
          Phone:
          <input
            type="tel"
            name="number"
            className={s.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
          ></input>
        </label>
        <button type="submit" className={s.btnAdd} disabled={isLoading}>
          ADD CONTACT
        </button>
      </form>
    </div>
  );
}

export default ContactForm;

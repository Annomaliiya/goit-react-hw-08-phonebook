import React from "react";
import { useSelector } from "react-redux";

import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";

import { useDeleteContactMutation } from "../../redux/contacts/api";

import PropTypes from "prop-types";
import s from "./ContactList.module.css";

function ContactList({ contacts }) {
  const visibleContacts = useSelector((state) =>
    getVisibleContacts(state, contacts)
  );

  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ul className={s.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            className={s.btnDelete}
            disabled={isLoading}
            onClick={() => deleteContact(id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
};

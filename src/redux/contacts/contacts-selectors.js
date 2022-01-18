import { contactsApi } from '../contacts/api';

export const getContacts = contactsApi.endpoints.fetchContacts.select();
export const getFilter = state => state.filter;
export const getToken = state => state.token;

export const getVisibleContacts = (state, contacts) => {
    const filter = getFilter(state);
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
        contact =>
            contact.name.toLowerCase().includes(normalizedFilter) ||
            contact.number.includes(normalizedFilter),
    );
};
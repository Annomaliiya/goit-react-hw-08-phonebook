import { useFetchContactsQuery } from "../../redux/contacts/api.js";
import ContactList from "../ContactList";
import LoaderTailSpin from "../Loader";

const ContactsListWrapper = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();

  return (
    <div>
      {isFetching && <LoaderTailSpin />}
      {contacts && <ContactList contacts={contacts} />}
    </div>
  );
};

export default ContactsListWrapper;

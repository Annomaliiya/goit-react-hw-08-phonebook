import { useFetchContactsQuery } from "../../redux/contacts/api.js";
import ContactList from "../ContactList";
import LoaderTailSpin from "../Loader";

const ContactsListWrapper = () => {
  var { data: contacts, isFetching } = useFetchContactsQuery();
  contacts = contacts instanceof Array ? contacts : [];

  return (
    <div>
      {isFetching && <LoaderTailSpin />}
      {contacts && <ContactList contacts={contacts} />}
    </div>
  );
};

export default ContactsListWrapper;

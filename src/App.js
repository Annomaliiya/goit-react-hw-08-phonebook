

import Section from './components/Section';
import ContactForm from "./components/ContactForm";
import ContactListWrapper from "./components/ContactListWrapper";
import Filter from "./components/Filter"

const App = () => {

  return (
    <>
      <Section title="Phonebook">
        <ContactForm
        />
      </Section>
      <Section title='Contacts'>
        <Filter
        />
        <ContactListWrapper
        />

      </Section>
    </>
  );
}

export default App;

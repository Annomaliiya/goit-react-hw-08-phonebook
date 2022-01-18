import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactListWrapper from '../components/ContactListWrapper';

export default function ContactsView() {
    return (
        <div className="ContactsView">
            <div>
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
            </div>
        </div>
    );
}
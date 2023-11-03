import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(({ name, number, id }) => (
        <Item key={id}>
          <ContactItem name={name} number={number} id={id} />
        </Item>
      ))}
    </List>
  );
};

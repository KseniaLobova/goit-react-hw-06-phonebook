import { ContactItem } from 'components/ContactItem/ContactItem';
import { Item, List } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          <ContactItem
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
          />
        </Item>
      ))}
    </List>
  );
};

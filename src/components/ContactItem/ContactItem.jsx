import { useDispatch } from 'react-redux';
import { WrapItem, Btn, TextItem } from './ContactItem.styled';
import { deleteContact } from 'reduce/contactsSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <WrapItem>
      <TextItem>
        {name}: {number}
      </TextItem>
      <Btn onClick={() => dispatch(deleteContact(id))}>Delete</Btn>
    </WrapItem>
  );
};

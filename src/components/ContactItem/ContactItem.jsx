import { WrapItem, Btn, TextItem } from './ContactItem.styled';
export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <WrapItem>
      <TextItem>
        {name}: {number}
      </TextItem>
      <Btn onClick={() => onDelete(id)}>Delete</Btn>
    </WrapItem>
  );
};

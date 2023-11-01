import { Label, Input } from './Filters.styled';

export const Filters = ({ onChangeFilter }) => {
  return (
    <Label>
      Find number by name:
      <Input type="text" onChange={evt => onChangeFilter(evt.target.value)} />
    </Label>
  );
};

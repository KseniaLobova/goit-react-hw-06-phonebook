import { useDispatch } from 'react-redux';
import { Label, Input } from './Filters.styled';
import { changeFilter } from 'reduce/filterSlice';

export const Filters = () => {
  const dispatch = useDispatch();
  return (
    <Label>
      Find number by name:
      <Input
        type="text"
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </Label>
  );
};

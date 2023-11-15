import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';
import { FilterLabel, InputFilter } from './FilterContacts.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <FilterLabel>
      Find contacts:
      <InputFilter
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        placeholder="Enter contacts..."
      />
    </FilterLabel>
  );
};

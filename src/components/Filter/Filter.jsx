import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const handelFilter = ({ target: { value } }) =>
    dispatch(setFilter(value.toLowerCase()));

  return (
    <label>
      <span className={css.spanFilter}>Find contacts by name</span>
      <br />
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        required
        onChange={evt => handelFilter(evt)}
        placeholder="Enter name for search"
      />
    </label>
  );
};

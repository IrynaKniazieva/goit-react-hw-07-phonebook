import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

import styles from './Filter.module.css'

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <div className={styles.contactFilter}>
      <label className={styles.contactFilterLabel}>Find contact by name</label>
      <input className={styles.contactFilterInput} type="text" value={filter} onChange={changeFilter}></input>
    </div>
  );
};

export default Filter;

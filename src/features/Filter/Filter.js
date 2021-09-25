import { useDispatch, useSelector } from 'react-redux'
import {
  setCurrentNationState,
  setResetToFirstPage,
} from '../../app/rootReducer'
import styles from './Filter.module.sass'

export default function Filter() {
  const currentNationState = useSelector(
    (state) => state.app.currentNationState
  )
  const nationStateList = useSelector((state) => state.app.nationStateList)
  const dispatch = useDispatch()

  const handleFilterChange = (e) => {
    dispatch(setResetToFirstPage(true))
    dispatch(setCurrentNationState(e.target.value))
  }

  return (
    <div className={styles.container}>
      <label htmlFor="filterByState">Filter by state:</label>
      <select
        id="filterByState"
        onChange={handleFilterChange}
        value={currentNationState}
      >
        <option value="">all</option>
        {nationStateList.map((state, i) => (
          <option key={i} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  )
}

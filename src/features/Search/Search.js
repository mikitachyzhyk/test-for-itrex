import { useDispatch, useSelector } from 'react-redux'
import { setResetToFirstPage, setSearchText } from '../../app/rootReducer'
import styles from './Search.module.sass'

export default function Search() {
  const searchText = useSelector((state) => state.app.searchText)
  const dispatch = useDispatch()

  const handleSearchTextChange = (e) => {
    dispatch(setResetToFirstPage(true))
    dispatch(setSearchText(e.target.value))
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="Search by name"
      />
    </div>
  )
}

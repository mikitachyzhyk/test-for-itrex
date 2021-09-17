import styles from './Search.module.sass'

export default function Search({ searchText, handleSearchTextChange }) {
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

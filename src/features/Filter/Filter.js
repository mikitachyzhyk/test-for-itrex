import styles from './Filter.module.sass'

export default function Filter({
  handleFilterChange,
  currentNationState,
  nationStateList,
}) {
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

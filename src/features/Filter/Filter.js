import styles from './Filter.module.sass'

export default function Filter({
  handleFilterChange,
  currentState,
  stateList,
}) {
  return (
    <div className={styles.container}>
      <label htmlFor="filterByState">Filter by state:</label>
      <select
        id="filterByState"
        onChange={handleFilterChange}
        value={currentState}
      >
        <option value="">all</option>
        {stateList.map((state, i) => (
          <option key={i} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  )
}

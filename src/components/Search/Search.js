export default function Search({ searchText, handleSearchTextChange }) {
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleSearchTextChange}
        placeholder="Search by name"
      />
    </div>
  )
}

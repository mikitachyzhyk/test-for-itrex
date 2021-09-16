export default function Table({ user, index, setCurrentUserIndex }) {
  const {
    id,
    firstName,
    lastName,
    email,
    phone,
    adress: { state },
  } = user

  function handleClick(e) {
    setCurrentUserIndex(e.currentTarget.dataset.index)
  }

  return (
    <tr data-index={index} onClick={handleClick}>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{state}</td>
    </tr>
  )
}

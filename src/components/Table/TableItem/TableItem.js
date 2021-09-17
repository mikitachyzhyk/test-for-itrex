import styles from './TableItem.module.sass'

export default function Table({ user, index, currentUser, setCurrentUser }) {
  const {
    id,
    firstName,
    lastName,
    email,
    phone,
    adress: { state },
  } = user

  function handleClick(e) {
    setCurrentUser(user)
  }

  return (
    <tr
      data-index={index}
      onClick={handleClick}
      className={user === currentUser ? styles.currentUser : null}
    >
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{state}</td>
    </tr>
  )
}

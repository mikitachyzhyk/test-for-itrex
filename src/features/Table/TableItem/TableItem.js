import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../../../app/rootReducer'
import styles from './TableItem.module.sass'

export default function Table({ user, index }) {
  const currentUser = useSelector((state) => state.app.currentUser)
  const dispatch = useDispatch()

  const {
    id,
    firstName,
    lastName,
    email,
    phone,
    adress: { state },
  } = user

  function handleClick(e) {
    dispatch(setCurrentUser(user))
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

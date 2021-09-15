export default function Table({ user }) {
  const {
    id,
    firstName,
    lastName,
    email,
    phone,
    adress: { state },
  } = user

  return (
    <tr>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{state}</td>
    </tr>
  )
}

export default function Table({ user }) {
  const { id, firstName, lastName, email, phone, state } = user

  return (
    <tr>
      <th>{id}</th>
      <th>{firstName}</th>
      <th>{lastName}</th>
      <th>{email}</th>
      <th>{phone}</th>
      <th>{state}</th>
    </tr>
  )
}

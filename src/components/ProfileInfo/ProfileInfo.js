export default function ProfileInfo({ currentUser }) {
  const {
    firstName,
    lastName,
    description,
    adress: { streetAddress, city, state, zip },
  } = currentUser

  return (
    <div>
      <div>Profile info:</div>
      <div>Selected profile: {`${firstName} ${lastName}`}</div>
      <div>Description: {description}</div>
      <div>Address: {streetAddress}</div>
      <div>City: {city}</div>
      <div>State: {state}</div>
      <div>Index: {zip}</div>
    </div>
  )
}

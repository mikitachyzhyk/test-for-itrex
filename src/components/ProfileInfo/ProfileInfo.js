export default function ProfileInfo({ currentUser }) {
  return (
    <div>
      <div>Profile info:</div>
      <div>
        Selected profile: {`${currentUser.firstName} ${currentUser.lastName}`}
      </div>
      <div>Description: {currentUser.description}</div>
      <div>Address: {currentUser.adress.streetAddress}</div>
      <div>City: {currentUser.adress.city}</div>
      <div>State: {currentUser.adress.state}</div>
      <div>Index: {currentUser.adress.zip}</div>
    </div>
  )
}

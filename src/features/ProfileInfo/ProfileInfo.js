import styles from './ProfileInfo.module.sass'

export default function ProfileInfo({ currentUser }) {
  const {
    firstName,
    lastName,
    description,
    adress: { streetAddress, city, state, zip },
  } = currentUser

  return (
    <div className={styles.container}>
      <div className={styles.title}>Profile info:</div>
      <div>
        <span>Selected profile:</span> {`${firstName} ${lastName}`}
      </div>
      <div>
        <span>Description:</span> {description}
      </div>
      <div>
        <span>Address:</span> {streetAddress}
      </div>
      <div>
        <span>City:</span> {city}
      </div>
      <div>
        <span>State:</span> {state}
      </div>
      <div>
        <span>Index:</span> {zip}
      </div>
    </div>
  )
}

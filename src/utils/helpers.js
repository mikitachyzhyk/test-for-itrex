export const sortUsersByField = (users, field, order) => {
  const toSort = (a, b, order) => {
    if (order === 'ASC') return a > b ? 1 : -1
    else return a > b ? -1 : 1
  }

  return users.slice().sort((user1, user2) => {
    if (field === 'state') {
      return toSort(user1.adress[field], user2.adress[field], order)
    }
    return toSort(user1[field], user2[field], order)
  })
}

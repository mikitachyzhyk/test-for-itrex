import React, { useEffect, useState } from 'react'
import Table from './components/Table/Table'

function App() {
  const [users, setUsers] = useState([])

  // https://designcode.io/react-hooks-handbook-fetch-data-from-an-api
  useEffect(() => {
    const url =
      'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'

    const loadUsers = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()
        setUsers(users.sort((user1, user2) => user1.id - user2.id))
      } catch (err) {
        console.error(err)
      }
    }

    loadUsers()
  }, [])

  const sortUsers = (field, order = 'ASC') => {
    const sort = (a, b, order) => {
      if (order === 'ASC') return a > b ? 1 : -1
      else return a > b ? -1 : 1
    }

    setUsers(
      users.slice().sort((user1, user2) => {
        if (field === 'state') {
          return sort(user1.adress[field], user2.adress[field], order)
        }
        return sort(user1[field], user2[field], order)
      })
    )
  }

  return (
    <div className="container">
      <div>
        <div>Search</div>
        <div>Filter</div>
      </div>

      <Table users={users} sortUsers={sortUsers} />

      <div>Info about user</div>
    </div>
  )
}

export default App

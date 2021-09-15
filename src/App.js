import React, { useEffect, useState } from 'react'
import './App.css'
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

  return (
    <div>
      <div>
        <div>Search</div>
        <div>Filter</div>
      </div>

      <Table users={users} />

      <div>Info about user</div>
    </div>
  )
}

export default App

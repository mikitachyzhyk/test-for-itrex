import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const loadUsers = async () => {
    const response = await fetch(
      'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'
    )
    const users = await response.json()
    console.log('Users loaded', users)
    return users
  }

  const [users, setUsers] = useState({})

  useEffect(() => {
    setUsers(loadUsers())
  }, [])

  return (
    <div>
      <div>
        <div>Search</div>
        <div>Filter</div>
      </div>

      <table>
        <caption>Table Caption</caption>
      </table>

      <div>pagination</div>

      <div>Info about user</div>
    </div>
  )
}

export default App

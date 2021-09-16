import React, { useEffect, useState } from 'react'
import Filter from './components/Filter/Filter'
import Search from './components/Search/Search'
import Table from './components/Table/Table'

function App() {
  const [originalUsers, setOriginalUsers] = useState([])
  const [users, setUsers] = useState([])

  // https://designcode.io/react-hooks-handbook-fetch-data-from-an-api
  useEffect(() => {
    const url =
      'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'

    const loadUsers = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()
        users.sort((user1, user2) => user1.id - user2.id)
        setOriginalUsers(users)
        setUsers(users)
        setStateList(
          Array.from(new Set(users.map((user) => user.adress.state).sort()))
        )
      } catch (err) {
        console.error(err)
      }
    }

    loadUsers()
  }, [])

  const [sorting, setSorting] = useState({
    field: 'id',
    order: 'ASC',
  })

  const [fieldNames] = useState({
    id: 'id',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: 'Phone',
    state: 'State',
  })

  const [searchText, setSearchText] = useState('')

  const [stateList, setStateList] = useState([])
  const [currentState, setCurrentState] = useState('')

  useEffect(() => {
    setUsers(
      originalUsers.filter(
        (user) =>
          (user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchText.toLowerCase())) &&
          user.adress.state.toLowerCase().includes(currentState.toLowerCase())
      )
    )
  }, [originalUsers, currentState, searchText])

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleFilterChange = (e) => {
    setCurrentState(e.target.value)
  }

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

    setSorting({ field, order })
  }

  return (
    <div className="container">
      <div>
        <Search
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
        />
        <Filter
          handleFilterChange={handleFilterChange}
          currentState={currentState}
          stateList={stateList}
        />
      </div>

      <Table
        users={users}
        sortUsers={sortUsers}
        sorting={sorting}
        fieldNames={fieldNames}
      />

      <div>Info about user</div>
    </div>
  )
}

export default App

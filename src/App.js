import React, { useEffect, useState } from 'react'
import Filter from './components/Filter/Filter'
import Search from './components/Search/Search'
import Table from './components/Table/Table'
import styles from './App.module.sass'
import ProfileInfo from './components/ProfileInfo/ProfileInfo'

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
      sort(
        originalUsers.filter(
          (user) =>
            (user.firstName
              .toLowerCase()
              .includes(searchText.trim().toLowerCase()) ||
              user.lastName
                .toLowerCase()
                .includes(searchText.trim().toLowerCase())) &&
            user.adress.state.toLowerCase().includes(currentState.toLowerCase())
        ),
        sorting.field,
        sorting.order
      )
    )
  }, [originalUsers, currentState, searchText, sorting.field, sorting.order])

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
  }

  const handleFilterChange = (e) => {
    setCurrentState(e.target.value)
  }

  const sort = (users, field, order) => {
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

  const sortUsers = (field, order = 'ASC') => {
    setUsers(sort(users, field, order))

    setSorting({ field, order })
  }

  const [currentUser, setCurrentUser] = useState(null)

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
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
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      {currentUser ? <ProfileInfo currentUser={currentUser} /> : null}

      <footer className={styles.footer}>
        <div>
          Created by:{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mikitachyzhyk"
          >
            mikitachyzhyk
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App

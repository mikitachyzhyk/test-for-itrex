import React, { useEffect, useState } from 'react'
import Filter from './features/Filter/Filter'
import Search from './features/Search/Search'
import Table from './features/Table/Table'
import styles from './App.module.sass'
import ProfileInfo from './features/ProfileInfo/ProfileInfo'
import { sortUsersByField } from './utils/helpers'

function App() {
  // const [originalUsers, setOriginalUsers] = useState([])
  // const [users, setUsers] = useState([])

  // https://designcode.io/react-hooks-handbook-fetch-data-from-an-api
  useEffect(() => {
    const url =
      'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'

    const loadUsers = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()
        users.sort((user1, user2) => user1.id - user2.id)
        // setOriginalUsers(users)
        // setUsers(users)
        // setNationStateList(
        //   Array.from(new Set(users.map((user) => user.adress.state).sort()))
        // )
      } catch (err) {
        console.error(err)
      }
    }

    loadUsers()
  }, [])

  // const [sorting, setSorting] = useState({
  //   field: 'id',
  //   order: 'ASC',
  // })

  // const [searchText, setSearchText] = useState('')

  // const [nationStateList, setNationStateList] = useState([])
  // const [currentNationState, setCurrentNationState] = useState('')

  useEffect(() => {
    // setUsers(
    //   sortUsersByField(
    //     originalUsers.filter(
    //       (user) =>
    //         (user.firstName
    //           .toLowerCase()
    //           .includes(searchText.trim().toLowerCase()) ||
    //           user.lastName
    //             .toLowerCase()
    //             .includes(searchText.trim().toLowerCase())) &&
    //         user.adress.state
    //           .toLowerCase()
    //           .includes(currentNationState.toLowerCase())
    //     ),
    //     sorting.field,
    //     sorting.order
    //   )
    // )
  }, [
    originalUsers,
    currentNationState,
    searchText,
    sorting.field,
    sorting.order,
  ])

  // const handleSearchTextChange = (e) => {
  //   setSearchText(e.target.value)
  // }

  // const handleFilterChange = (e) => {
  //   setCurrentNationState(e.target.value)
  // }

  const sortUsers = (field, order = 'ASC') => {
    // setUsers(sortUsersByField(users, field, order))
    // setSorting({ field, order })
  }

  // const [currentUser, setCurrentUser] = useState(null)

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <Search
        // searchText={searchText}
        // handleSearchTextChange={handleSearchTextChange}
        />
        <Filter
        // handleFilterChange={handleFilterChange}
        // currentNationState={currentNationState}
        // nationStateList={nationStateList}
        />
      </div>

      <Table
      // users={users}
      // sortUsers={sortUsers}
      // sorting={sorting}
      // currentUser={currentUser}
      // setCurrentUser={setCurrentUser}
      />

      {currentUser ? <ProfileInfo /* currentUser={currentUser} */ /> : null}

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

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './App.module.sass'
import {
  setNationStateList,
  setOriginalUsers,
  setUsers,
} from './app/rootReducer'
import Filter from './features/Filter/Filter'
import ProfileInfo from './features/ProfileInfo/ProfileInfo'
import Search from './features/Search/Search'
import Table from './features/Table/Table'
import { sortUsersByField } from './utils/helpers'

function App() {
  const originalUsers = useSelector((state) => state.app.originalUsers)
  const sorting = useSelector((state) => state.app.sorting)
  const searchText = useSelector((state) => state.app.searchText)
  const currentNationState = useSelector(
    (state) => state.app.currentNationState
  )
  const currentUser = useSelector((state) => state.app.currentUser)
  const dispatch = useDispatch()

  // https://designcode.io/react-hooks-handbook-fetch-data-from-an-api
  useEffect(() => {
    const url =
      'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'

    const loadUsers = async () => {
      try {
        const response = await fetch(url)
        const users = await response.json()
        users.sort((user1, user2) => user1.id - user2.id)
        dispatch(setOriginalUsers(users))
        dispatch(setUsers(users))
        dispatch(
          setNationStateList(
            Array.from(new Set(users.map((user) => user.adress.state).sort()))
          )
        )
      } catch (err) {
        console.error(err)
      }
    }

    loadUsers()
  }, [])

  useEffect(() => {
    dispatch(
      setUsers(
        sortUsersByField(
          originalUsers.filter(
            (user) =>
              (user.firstName
                .toLowerCase()
                .includes(searchText.trim().toLowerCase()) ||
                user.lastName
                  .toLowerCase()
                  .includes(searchText.trim().toLowerCase())) &&
              user.adress.state
                .toLowerCase()
                .includes(currentNationState.toLowerCase())
          ),
          sorting.field,
          sorting.order
        )
      )
    )
  }, [
    originalUsers,
    currentNationState,
    searchText,
    sorting.field,
    sorting.order,
    dispatch,
  ])

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <Search />
        <Filter />
      </div>

      <Table />

      {currentUser ? <ProfileInfo /> : null}

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

import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setResetToFirstPage,
  setSorting,
  setUsers,
} from '../../app/rootReducer'
import { fieldNames } from '../../utils/constants'
import { sortUsersByField } from '../../utils/helpers'
import Pagination from './Pagination/Pagination'
import styles from './Table.module.sass'
import TableItem from './TableItem/TableItem'

const pageSize = 20

export default function Table() {
  const users = useSelector((state) => state.app.users)
  const sorting = useSelector((state) => state.app.sorting)
  const resetToFirstPage = useSelector((state) => state.app.resetToFirstPage)
  const dispatch = useDispatch()

  const sortUsers = (field, order = 'ASC') => {
    dispatch(setUsers(sortUsersByField(users, field, order)))
    dispatch(setSorting({ field, order }))
  }

  const [currentPage, setCurrentPage] = useState(1)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize
    return users.slice(firstPageIndex, lastPageIndex)
  }, [users, currentPage])

  useEffect(() => {
    if (resetToFirstPage) {
      setCurrentPage(1)
      dispatch(setResetToFirstPage(false))
    }
  }, [users])

  const handleClick = (field) => {
    return () => {
      if (sorting.field === field && sorting.order === 'ASC') {
        sortUsers(field, 'DESC')
        return
      }

      sortUsers(field)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <table>
          <thead>
            <tr>
              {Object.entries(fieldNames).map((field, i) => (
                <th
                  key={i}
                  onClick={handleClick(field[0])}
                  className={
                    field[0] === sorting.field
                      ? sorting.order === 'ASC'
                        ? styles.sortedAsc
                        : styles.sortedDesc
                      : null
                  }
                >
                  {field[1]}
                </th>
              ))}
            </tr>
          </thead>

          {!!currentTableData.length ? (
            <tbody>
              {currentTableData.map((user, i) => (
                <TableItem key={i} user={user} index={i} />
              ))}
            </tbody>
          ) : null}
        </table>
      </div>

      {!currentTableData.length ? (
        <div className={styles.nothingFound}>Sorry, nothing found.</div>
      ) : null}

      <Pagination
        currentPage={currentPage}
        totalCount={users.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  )
}

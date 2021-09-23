import React, { useMemo, useState } from 'react'
import Pagination from './Pagination/Pagination'
import TableItem from './TableItem/TableItem'
import styles from './Table.module.sass'
import { useEffect } from 'react'
import { fieldNames } from '../../utils/constants'

const pageSize = 20

export default function Table({
  users,
  sortUsers,
  sorting,
  currentUser,
  setCurrentUser,
}) {
  const [currentPage, setCurrentPage] = useState(1)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize
    return users.slice(firstPageIndex, lastPageIndex)
  }, [users, currentPage])

  useEffect(() => {
    setCurrentPage(1)
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
                <TableItem
                  key={i}
                  user={user}
                  index={i}
                  currentUser={currentUser}
                  setCurrentUser={setCurrentUser}
                />
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

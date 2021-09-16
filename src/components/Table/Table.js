import React, { useMemo, useState } from 'react'
import Pagination from './Pagination/Pagination'
import TableItem from './TableItem/TableItem'
import styles from './Table.module.sass'

const pageSize = 20

export default function Table({
  users,
  sortUsers,
  sorting,
  fieldNames,
  setCurrentUserIndex,
}) {
  const [currentPage, setCurrentPage] = useState(1)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize
    return users.slice(firstPageIndex, lastPageIndex)
  }, [users, currentPage])

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
      <table className={styles.container}>
        <thead>
          <tr>
            {Object.entries(fieldNames).map((field, i) => (
              <th
                key={i}
                onClick={handleClick(field[0])}
                className={
                  field[0] === sorting.field
                    ? sorting.order === 'ASC'
                      ? styles.sorted + ' ' + styles.sortedAsc
                      : styles.sorted + ' ' + styles.sortedDesc
                    : null
                }
              >
                {field[1]}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentTableData.map((user, i) => (
            <TableItem
              key={i}
              user={user}
              index={i}
              setCurrentUserIndex={setCurrentUserIndex}
            />
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalCount={users.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  )
}

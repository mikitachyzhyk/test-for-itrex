import React, { useMemo, useState } from 'react'
import Pagination from './Pagination/Pagination'
import TableItem from './TableItem/TableItem'
import styles from './Table.module.sass'

const pageSize = 20

export default function Table({ users, sortUsers }) {
  const [currentPage, setCurrentPage] = useState(1)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize
    return users.slice(firstPageIndex, lastPageIndex)
  }, [users, currentPage])

  // TODO: state to store ASC, DESC values

  const handleClick = (field) => {
    return (e) => {
      if (e.target.dataset.sort === 'ASC') {
        // e.target.dataset.sort = 'DESC'
        sortUsers(field, 'DESC')
      }

      // e.target.dataset.sort = 'ASC'
      sortUsers(field)
    }
  }

  return (
    <>
      <table className={styles.container}>
        <thead>
          <tr>
            <th onClick={handleClick('id')}>id</th>
            <th onClick={handleClick('firstName')}>First name</th>
            <th onClick={handleClick('lastName')}>Last name</th>
            <th onClick={handleClick('email')}>Email</th>
            <th onClick={handleClick('phone')}>Phone</th>
            <th onClick={handleClick('state')}>State</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((user, i) => (
            <TableItem key={i} user={user} />
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

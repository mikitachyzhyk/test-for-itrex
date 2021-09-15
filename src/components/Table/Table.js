import React, { useMemo, useState } from 'react'
import Pagination from './Pagination/Pagination'
import TableItem from './TableItem/TableItem'

const pageSize = 20

export default function Table({ users }) {
  const [currentPage, setCurrentPage] = useState(1)

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize
    return users.slice(firstPageIndex, lastPageIndex)
  }, [users, currentPage])

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>State</th>
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

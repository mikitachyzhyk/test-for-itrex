import React from 'react'
import { DOTS, usePagination } from '../../../hooks/usePagination'

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    // className,
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  // let lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul>
      {/* Left navigation arrow */}
      <li onClick={onPrevious}>
        <div />
      </li>
      {paginationRange.map((pageNumber, i) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li key={i}>&#8230;</li>
        }

        // Render our Page Pills
        return (
          <li key={i} onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        )
      })}
      {/*  Right Navigation arrow */}
      <li onClick={onNext}>
        <div />
      </li>
    </ul>
  )
}

export default Pagination

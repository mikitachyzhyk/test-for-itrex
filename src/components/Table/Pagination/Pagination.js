import React from 'react'
import { DOTS, usePagination } from '../../../hooks/usePagination'
import styles from './Pagination.module.sass'

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul className={styles.container}>
      <li
        className={`${styles.item}${
          currentPage === 1 ? ' ' + styles.disabled : ''
        }`}
        onClick={onPrevious}
      >
        Previous
      </li>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <li className={styles.item} key={i}>
              &#8230;
            </li>
          )
        }

        return (
          <li
            className={`${styles.item}${
              currentPage === pageNumber ? ' ' + styles.activeItem : ''
            }`}
            key={i}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        className={`${styles.item}${
          currentPage === lastPage ? ' ' + styles.disabled : ''
        }`}
        onClick={onNext}
      >
        Next
      </li>
    </ul>
  )
}

export default Pagination

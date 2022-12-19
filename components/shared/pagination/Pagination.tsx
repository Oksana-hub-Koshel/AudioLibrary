import { useMemo } from "react";
import styles from './Pagination.module.css'
import ReactPaginate from 'react-paginate';
import { PaginationProps } from "./pagination.interface";


function Pagination({ allSongs, page, callback }: PaginationProps) {
  const { length } = allSongs;
  const limit = Math.ceil(length / Math.max(10, 1));
  const currentPage = Number(page)
  const pages = useMemo(
    () =>
      Array.from(
        { length: limit },
        (_, i) => i + 1
      ),
    [limit]
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.songsOfSongs}>
        {currentPage * 10 - 9}-{length - 1 < currentPage * 10 ? length - 1 : currentPage * 10} out of {length - 1}
      </div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pages.length}
        onPageChange={callback}
        forcePage={currentPage - 1}
        containerClassName={styles.pagination}
        marginPagesDisplayed={1}
        previousLinkClassName={styles.prev}
        nextLinkClassName={styles.next}
        disabledLinkClassName={styles.disabled}
        activeClassName={styles.active}
      />
    </div>
  )
}

export default Pagination

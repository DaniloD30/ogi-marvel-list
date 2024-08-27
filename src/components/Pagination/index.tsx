import { Dispatch, SetStateAction, useMemo } from "react";
import "./index.css";

type PaginationProps = {
  page: number;
  total: number;
  setPage: Dispatch<SetStateAction<number>>;
};
const Pagination = ({ page, total, setPage }: PaginationProps) => {
  const numPages = useMemo(() => {
    return Math.ceil(total / 10);
  }, [total]);

  const actualPage = (index: number) => page === index;

  return (
    <div className="pagination-container">
      {page !== 0 && (
        <button className="arrow" onClick={() => setPage(0)}>{`<<`}</button>
      )}

      {page !== 0 && (
        <button
          className="arrow"
          onClick={() => setPage((prev) => prev - 1)}
        >{`<`}</button>
      )}

      <div className="container-buttons-numbers">
        {[...Array(numPages)].map((_, index) => (
          <button
            key={index}
            className={`${
              actualPage(index) ? "number-page-active" : "number-page-inactive"
            }`}
            onClick={() => setPage(index)}
          >
            <p>{index + 1}</p>
          </button>
        ))}
      </div>

      {page !== numPages && (
        <button
          className="arrow"
          onClick={() => setPage((prev) => prev + 1)}
        >{`>`}</button>
      )}

      {page !== numPages && (
        <button
          className="arrow"
          onClick={() => setPage(numPages - 1)}
        >{`>>`}</button>
      )}
    </div>
  );
};

export default Pagination;

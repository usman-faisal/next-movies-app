import { useEffect, useState } from "react";
function usePagination(urlToFetch) {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    if (currentPage === 1) {
      return;
    }
    fetch(urlToFetch + currentPage)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [currentPage]);
  return { data, currentPage, setCurrentPage };
}

export default usePagination;

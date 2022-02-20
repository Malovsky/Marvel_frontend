import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardComic from "../components/CardComic";

const Comics = () => {
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchComics = async () => {
      const response = await axios.get(
        `https://marvel-back-malovsky.herokuapp.com/comics?title=${title}&page=${page}&limit=${limit}`
      );
      setComics(response.data);
      setIsLoading(false);
    };
    fetchComics();
  }, [title, page]);

  return isLoading ? (
    <div>
      <p>Loading ... </p>
    </div>
  ) : (
    <div className="comics-container">
      <div className="search-comics-container">
        <label htmlFor="serach-comics">Chercher un comics</label>
        <input
          id="serach-comics"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div className="card-comics-container">
        {comics.results.map((comic) => {
          return (
            <Link to={`/comic/${comic._id}`} key={comic._id} state={comic}>
              <CardComic key={comic._id} comic={comic} />
            </Link>
          );
        })}
      </div>
      <div className="pagination">
        {page > 1 && (
          <button
            className="home-button"
            onClick={() => {
              setPage(page - 1);
              window.scrollTo(0, 0);
            }}
          >
            -
          </button>
        )}
        <p className="page">{page}</p>
        {page <= Math.trunc(Number(comics.count) / limit) && (
          <button
            className="home-button"
            onClick={() => {
              setPage(page + 1);
              window.scrollTo(0, 0);
            }}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Comics;

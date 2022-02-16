import axios from "axios";
import { useEffect, useState } from "react";
import CardPersonnage from "../components/CardPersonnage";

const Personnages = () => {
  const [comics, setComics] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchComics = async () => {
      const data = await axios.get(
        `http://localhost:3001/comics?name=${name}&page=${page}&limit=${limit}`
      );
      setComics(data.data);
      setIsLoading(false);
      console.log(data.data);
      console.log("pass");
    };
    fetchComics();
  }, [name, page]);

  return isLoading ? (
    <div>
      <p>ça load</p>
    </div>
  ) : (
    <div className="personnages-container">
      <input
        className="search-personnages"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <div className="card-personnages-container">
        {comics.results.map((comic) => {
          return <CardPersonnage key={comic._id} comic={comic} />;
        })}
      </div>
      <div className="pagination">
        {page > 1 && (
          <button
            className="home-button"
            onClick={() => {
              setPage(page - 1);
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
            }}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
};

export default Personnages;

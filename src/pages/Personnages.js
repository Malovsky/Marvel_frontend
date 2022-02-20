import axios from "axios";
import { useEffect, useState } from "react";
import CardPersonnage from "../components/CardPersonnage";
import { Link } from "react-router-dom";

const Personnages = () => {
  const [personnages, setPersonnages] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchPersonnages = async () => {
      const response = await axios.get(
        `https://marvel-back-malovsky.herokuapp.com/personnages?name=${name}&page=${page}&limit=${limit}`
      );
      setPersonnages(response.data);
      setIsLoading(false);
    };
    fetchPersonnages();
  }, [name, page]);

  return isLoading ? (
    <div>
      <p>Loading ... </p>
    </div>
  ) : (
    <div className="personnages-container">
      <div className="search-personnages-container">
        <label htmlFor="search-personnages">Chercher un personnage</label>
        <input
          id="search-personnages"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div className="card-personnages-container">
        {personnages.results.map((personnage) => {
          return (
            <Link to={`/personnage/${personnage._id}`} key={personnage._id}>
              <CardPersonnage key={personnage._id} personnage={personnage} />
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
        {page <= Math.trunc(Number(personnages.count) / limit) && (
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

export default Personnages;

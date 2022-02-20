import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Personnage = () => {
  const [personnage, setPersonnage] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchPersonnage = async () => {
      const response = await axios.get(
        `https://marvel-back-malovsky.herokuapp.com/personnage/${id}`
      );
      setPersonnage(response.data);
      setIsLoading(false);
    };

    fetchPersonnage();
  }, [id]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div className="personnage-container">
      <div className="personnage-texts">
        <p className="personnage-name">{personnage.name}</p>
        {personnage.description ? (
          <p className="personnage-description">{personnage.description}</p>
        ) : (
          <p className="card-personnage-nodescription">
            Pas encore de description
          </p>
        )}
        <p className="card-personnage-apparition">Apparitions :</p>
        <div className="personnage-comics-container">
          {personnage.comics.map((comic) => {
            return (
              <div className="personnage-comic-container" key={comic._id}>
                <img
                  className="personnage-comics"
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt={comic._id}
                ></img>
                <p>{comic.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="personnage-comics-image-container">
        <img
          src={`${personnage.thumbnail.path}.${personnage.thumbnail.extension}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default Personnage;

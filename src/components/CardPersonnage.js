const CardPersonnage = ({ comic }) => {
  return (
    <div className="card-personnage">
      <div className="card-personnage-picture-container">
        <img
          className="card-personnage-picture"
          key={comic._id}
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.thumbnail.path}
        />
      </div>
    </div>
  );
};

export default CardPersonnage;

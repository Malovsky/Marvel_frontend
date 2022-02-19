const CardPersonnage = ({ personnage }) => {
  return (
    <div className="card-personnage">
      <div className="card-personnage-picture-container">
        <img
          className="card-personnage-picture"
          src={`${personnage.thumbnail.path}.${personnage.thumbnail.extension}`}
          alt={personnage._id}
        />
      </div>
      <div className="card-personnage-texts">
        {personnage.name && (
          <p className="card-personnage-name">{personnage.name}</p>
        )}
        {personnage.description ? (
          <p className="card-personnage-description">
            {personnage.description.substring(0, 120)}...
          </p>
        ) : (
          <p className="card-personnage-nodescription">
            Pas encore de description.
          </p>
        )}
      </div>
    </div>
  );
};

export default CardPersonnage;

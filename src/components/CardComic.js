const CardComic = ({ comic }) => {
  return (
    <div className="card-comic">
      <div className="card-comic-picture-container">
        <img
          className="card-comic-picture"
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic._id}
        />
      </div>
      <div className="card-comic-texts">
        <p className="card-comic-title">{comic.title}</p>
      </div>
    </div>
  );
};

export default CardComic;

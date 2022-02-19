import { useLocation } from "react-router-dom";

const Comic = () => {
  const location = useLocation();
  const comic = location.state;
  console.log("location", location);
  console.log("state", location.state);
  console.log("comic", comic);
  return (
    <div className="comic-container">
      <div className="comic-texts">
        <p className="comic-texts-title">{comic.title}</p>
        <p className="comic-texts-description">{comic.description}</p>
      </div>
      <div className="comic-image-container">
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic._id}
        />
      </div>
    </div>
  );
};

export default Comic;

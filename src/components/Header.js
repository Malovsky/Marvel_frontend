import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="center-container">
        <div className="header-left">
          <img
            className="marvel-logo"
            src="/marvel-logo.png"
            alt="Marvel logo"
            onClick={() => navigate("/")}
          />
          <Link to="/personnages">
            <p>Personnages</p>
          </Link>
          <Link to="/comics">
            <p>Comics</p>
          </Link>
          <Link to="/mes_favoris">
            <p>Favoris</p>
          </Link>
        </div>
        <div className="header-right">
          <Link to="/signup">
            <button className="home-button">Signup</button>
          </Link>
          <Link to="/login">
            <button className="home-button">Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

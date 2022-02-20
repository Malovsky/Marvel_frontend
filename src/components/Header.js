import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
  function dropdownfunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

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
          <Link className="full-screen" to="/personnages">
            <p>Personnages</p>
          </Link>
          <Link className="full-screen" to="/comics">
            <p>Comics</p>
          </Link>
          {token && (
            <Link className="full-screen" to="/mes_favoris">
              <p>Favoris</p>
            </Link>
          )}
        </div>
        <div className="header-right full-screen">
          {token ? (
            <>
              <Link to="/">
                <button
                  className="home-button"
                  onClick={() => {
                    Cookies.remove("token");
                    setUser(Cookies.get("token"));
                  }}
                >
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup">
                <button className="home-button">Signup</button>
              </Link>
              <Link to="/login">
                <button className="home-button">Login</button>
              </Link>
            </>
          )}
        </div>
        <div className="header-right drp-down small-screen">
          <button onClick={dropdownfunction} className="dropbtn">
            Menu
          </button>
          <div id="myDropdown" className="dropdown-content">
            <Link to="/personnages">
              <p>Personnages</p>
            </Link>
            <Link to="/comics">
              <p>Comics</p>
            </Link>
            {token ? (
              <>
                <Link to="/mes_favoris">
                  <p>Favoris</p>
                </Link>
                <p
                  onClick={() => {
                    Cookies.remove("token");
                    setUser(Cookies.get("token"));
                  }}
                >
                  Logout
                </p>
              </>
            ) : (
              <>
                <Link to="/signup">
                  <p>Signup</p>
                </Link>
                <Link to="/login">
                  <p>Login</p>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

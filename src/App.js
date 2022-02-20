// PACKAGES
import "./App.css";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// COMPONENTS
import Header from "./components/Header";

// PAGES
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Personnages from "./pages/Personnages";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import Personnage from "./pages/Personnage";
import Comic from "./pages/Comic";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const setUser = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token);
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };

  return (
    <Router>
      <Header token={token} setUser={setUser}></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup setUser={setUser} />}></Route>
        <Route path="/login" element={<Login setUser={setUser} />}></Route>
        <Route path="/personnages" element={<Personnages />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/mes_favoris" element={<Favoris token={token} />}></Route>
        <Route path="/personnage/:id" element={<Personnage />}></Route>
        <Route path="/comic/:id" element={<Comic />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

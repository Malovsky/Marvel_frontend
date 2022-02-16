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

function App() {
  // const [isConnected, setIsConnected] = useState(false);

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/personnages" element={<Personnages />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/mes_favoris" element={<Favoris />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

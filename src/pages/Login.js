import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const [email, valueOfEmail] = useState("");
  const [password, valueOfPassword] = useState("");

  const handleSubmitSignUpForm = async (event) => {
    event.preventDefault();

    try {
      const data = { email: email, password: password };

      const response = await axios.post(
        `https://marvel-back-malovsky.herokuapp.com/user/login`,
        data
      );
      setUser(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h2>Se Connecter</h2>
      <form id="login-form" onSubmit={handleSubmitSignUpForm}>
        <input
          className="login-form-input"
          placeholder="Email"
          value={email}
          onChange={(event) => {
            valueOfEmail(event.target.value);
          }}
          type="text"
        />
        <input
          className="login-form-input"
          placeholder="Mot de passe"
          value={password}
          onChange={(event) => {
            valueOfPassword(event.target.value);
          }}
          type="password"
        />
        <button className="submit-login-button" type="submit" id="submit">
          Envoyer
        </button>
      </form>
      <p
        className="login-signup-link"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Pas encore de compte ? Inscris toi !
      </p>
    </div>
  );
};

export default Login;

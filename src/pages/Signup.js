import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = ({ setUser }) => {
  const navigate = useNavigate();

  const [email, valueOfEmail] = useState("");
  const [password, valueOfPassword] = useState("");
  const [confirmPassword, valueOfConfirmPassword] = useState("");

  const handleSubmitSignUpForm = async (event) => {
    event.preventDefault();

    try {
      const data = { email: email, password: password };
      const response = await axios.post(
        `http://localhost:3001/user/signup`,
        data
      );
      setUser(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signup-container">
      <h2>S'inscrire</h2>
      <form id="signup-form" onSubmit={handleSubmitSignUpForm}>
        <input
          className="signup-form-input"
          type="text"
          placeholder="Email"
          onChange={(event) => valueOfEmail(event.target.value)}
          value={email}
          id="email"
        />
        <input
          className="signup-form-input"
          type="password"
          placeholder="Mot de passe"
          onChange={(event) => valueOfPassword(event.target.value)}
          value={password}
          id="password"
        />
        <input
          className="signup-form-input"
          type="password"
          placeholder="Confirmer mot de passe"
          onChange={(event) => valueOfConfirmPassword(event.target.value)}
          value={confirmPassword}
          id="confirm-password"
        />
        <button className="submit-signup-button" id="submit" type="submit">
          Envoyer
        </button>
      </form>
      <p
        className="login-signup-link"
        onClick={() => {
          navigate("/login");
        }}
      >
        Tu as déjà un compte ? Connecte toi !
      </p>
    </div>
  );
};

export default Signup;

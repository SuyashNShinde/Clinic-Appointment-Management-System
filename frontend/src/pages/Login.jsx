import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      // Store JWT Token
      localStorage.setItem(
        "token",
        response.data.token
      );

      // Store Patient Details
      localStorage.setItem(
        "patient_id",
        response.data.patient_id
      );

      localStorage.setItem(
        "patient_name",
        response.data.name
      );

      localStorage.setItem(
        "patient_email",
        response.data.email
      );

      alert("Login Successful");

      navigate("/doctors");

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "400px",
        margin: "50px auto",
        border: "1px solid #ddd",
        borderRadius: "10px"
      }}
    >
      <h2>Patient Login</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
          style={{
            width: "100%",
            padding: "10px"
          }}
        />

        <br /><br />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px"
          }}
        >
          Login
        </button>

      </form>

      <br />

      <Link to="/register">
        Create Account
      </Link>

    </div>
  );
}

export default Login;
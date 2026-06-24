import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      "Login Submitted:",
      {
        email,
        password,
      }
    );
  };

  const handleGoogleLogin = () => {
    console.log(
      "Google Login Clicked"
    );
  };

  const handleEmailLogin = () => {
    console.log(
      "Email Login Clicked"
    );
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">
          Login
        </button>
      </form>

      <div className="separator">
        <span>
          Or continue with
        </span>
      </div>

      <div className="social-buttons">
        <button
          className="social-button google"
          onClick={
            handleGoogleLogin
          }
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="social-icon"
          />

          Google
        </button>

        <button
          className="social-button email"
          onClick={
            handleEmailLogin
          }
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/Email_Icon.svg"
            alt="Email Logo"
            className="social-icon"
          />

          Email
        </button>
      </div>

      <Link to="#">
        Forgot Password?
      </Link>

      <p className="login-text">
        Don’t have an account?{" "}

        <Link to="/register">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;

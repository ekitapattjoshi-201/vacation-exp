import { useState } from "react";
import "./login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted:", { email, password });
  };

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
  };

  const handleEmailLogin = () => {
    console.log("Email Login Clicked");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      {/* Separator */}
      <div className="separator">
        <span>Or continue with</span>
      </div>

      {/* Social Login Buttons */}
      <div className="social-buttons">
        <button className="social-button google" onClick={handleGoogleLogin}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="social-icon"
          />
          Google
        </button>
        <button className="social-button email" onClick={handleEmailLogin}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/Email_Icon.svg"
            alt="Email Logo"
            className="social-icon"
          />
          Email
        </button>
      </div>

      <a href="#">Forgot Password?</a>
    </div>
  );
};

export default LoginForm;

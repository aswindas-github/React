import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation and login logic
    // This is just a dummy example, replace this with actual authentication logic
    if (email === "test@example.com" && password === "password123") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid email or password.");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Welcome back, {email}!</p>
        <button onClick={() => setIsLoggedIn(false)}>Log out</button>
      </div>
    );
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        {error && <p className="error">{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;

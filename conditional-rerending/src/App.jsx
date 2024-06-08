import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setisLogin] = useState(false);

  const handleLogin = () => setisLogin(true);
  const handleLogout = () => setisLogin(false);

  return (
    <div className="main-container">
      <h1>Conditional Rendering</h1>
      {isLogin ? (
        <div className="log-in">
          <h2>You are log in</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="log-out">
          <h2>You are log out</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
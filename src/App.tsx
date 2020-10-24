import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { UserDto } from "./type/user-dto-";

function App() {
  const [user, setUser] = useState<UserDto>();
  useEffect(() => {});

  const getUser = (): UserDto => {
    const user = new UserDto(1, "Morteza", "Tehran");
    return user;
  };

  const handleClick = () => {
    setUser(getUser);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{user ? <span>{user.name}</span> : null}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>Get User</button>
      </header>
    </div>
  );
}

export default App;

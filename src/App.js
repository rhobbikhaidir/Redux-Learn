import logo from "./logo.svg";
import { useState, useEffect } from "react";
// import BlogSpot from "./BlogSpot";
import Home from "./Home";
import "./App.css";

function App() {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   const user =
  //     localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

  //   user && setUser(user);
  // }, []);

  // const onLoginHandler = () => {
  //   localStorage.setItem(
  //     "user",
  //     JSON.stringify({
  //       name: "Dimas",
  //       age: 23,
  //       token: "not-null",
  //     })
  //   );
  //   const user =
  //     localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"));

  //   user && setUser(user);
  // };

  // const onLogoutHandler = () => {
  //   localStorage.setItem("user", "");
  //   setUser("");
  // };

  return (
    <>
      <Home />
    </>
  );
}

export default App;

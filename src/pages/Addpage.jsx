import React from "react";
import "./addPage.css";
import { useState } from "react";
import { addUser } from "../apiCalling/FetchApi.js";
import { useNavigate } from "react-router-dom";

export default function Addpage() {
  const [firstname, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const navigator = useNavigate();

  const getData = async (event) => {
    event.preventDefault();

    const data = {
      name: firstname,
      email: email,
      password: password,
      confirmPassword: confirmpassword,
    };
    if (confirmpassword == password) {
       await addUser(data).then(navigator("/"));
    } else {
      setPassword("")
      setConfirmPassword("")
      window.alert("password not match");
    }
  };

  return (
    <div className="Addpage">
      <form onSubmit={getData}>
        <label>Name</label>
        <br />
        <input
          type="string"
          name="name"
          id="name"
          value={firstname}
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <br />
        <label>id</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br />
        <label>ConfirrmPassword</label>
        <br />
        <input
          type="password"
          id="confirmPasswoprd"
          name="confirmpassword"
          value={confirmpassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
      </form>
      <button onClick={getData} type="submit">
        Update
      </button>
    </div>
  );
}

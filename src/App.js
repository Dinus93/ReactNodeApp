import React from "react";
import { useState } from "react";

import "./App.css";
import axios from "axios";
export default function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const registered = {
      fullname: name,
      lastname: surname,
      email: email,
      password: password,
    };
    const postData = async () => {
      const response = await axios.post(
        "http://localhost:4000/app/signup",
        registered
      );
      console.log(response.data);
    };
    postData();
    setName("");
    setSurname("");
    setEmail("");
    setPassword("");
  };
  const changeFirstName = (e) => {
    setName(e.target.value);
  };
  const changeLastName = (e) => {
    setSurname(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="App">
      <div className="ui container">
        <form className="ui form" onSubmit={onSubmit}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
              value={name}
              onChange={changeFirstName}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
              value={surname}
              onChange={changeLastName}
            />
          </div>
          <div className="field">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="last-name"
                placeholder="Last Name"
                value={email}
                onChange={changeEmail}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="last-name"
                placeholder="Last Name"
                value={password}
                onChange={changePassword}
              />
            </div>
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

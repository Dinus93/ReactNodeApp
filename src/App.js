import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeField = (setField) => (e) => setField(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    const registered = {
      firstName,
      lastName,
      email,
      password,
    };

    const postData = async () => {
      const response = await axios.post(
        'http://localhost:4000/app/signup',
        registered
      );
      console.log(response.data);
    };

    postData();

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
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
              value={firstName}
              onChange={onChangeField(setFirstName)}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
              value={lastName}
              onChange={onChangeField(setLastName)}
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
                onChange={onChangeField(setEmail)}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="last-name"
                placeholder="Last Name"
                value={password}
                onChange={onChangeField(setPassword)}
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

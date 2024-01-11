import React from 'react';
import { useState } from 'react';
import './style.css';

export const Registration = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(user);
        setUser({
          ...user,
          username: '',
          email: '',
          password: '',
          passwordConfirm: '',
        });
      }}
    >
      <h1>REGISTRATION</h1>
      <label>
        Email Address
        <input
          type="email"
          value={user.email}
          onChange={(e) => {
            const index = user.email.indexOf('@');
            setUser({
              ...user,
              email: e.target.value,
              username: user.email.slice(0, index),
            });
          }}
        />
      </label>
      <br />
      <label>
        User Name
        <input
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </label>
      <br />
      <label>
        Password
        <input
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </label>
      <br />
      <label>
        Confirm Password
        <input
          value={user.passwordConfirm}
          onChange={(e) =>
            setUser({ ...user, passwordConfirm: e.target.value })
          }
        />
      </label>
      <button type="submit">REGISTER</button>
    </form>
  );
};

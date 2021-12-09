import React from 'react';

const Input = ({ name, placeholder, handleChange, label, autoFocus, type, handleShowPassword }) => (
  <div>
    <input
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      variant="outlined"
      required
      label={label}
      autoFocus={autoFocus}
      type={type}
    />
    {name === 'password' ?
      <button type="button" onClick={handleShowPassword}>
        {type === 'password' ? "show password" : "hide password"}
      </button>
      : null}
  </div>
);

export default Input;

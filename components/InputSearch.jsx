import React from "react";

export default function InputSearch({ type, placeholder, callback }) {
  const handleInput = (e) => {
    callback(e.target.value);
  };

  return (
    <>
      <input
        className="comp-input-search"
        type={type}
        placeholder={placeholder}
        onChange={handleInput}
      />
    </>
  );
}

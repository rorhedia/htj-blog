import React from "react";

export default function InputSearch({ type, placeholder }) {
  return (
    <>
      <input className="comp-input" type={type} placeholder={placeholder} />
    </>
  );
}

import React from "react";

export default function Input({
  label,
  type,
  name,
  value,
  placeholder,
  callback,
}) {
  const handleInput = (e) => {
    callback(e.target);
  };

  return (
    <>
      <div className="form-group col-md-6">
        <label>{label}</label>
        <input
          className="form-control comp-input"
          type={type || "text"}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleInput}
        />
      </div>
    </>
  );
}

import React from "react";

export default function InputCheckbox({ id, name }) {
  return (
    <div className="form-group">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id={id} />
        <label className="form-check-label">{name}</label>
      </div>
    </div>
  );
}

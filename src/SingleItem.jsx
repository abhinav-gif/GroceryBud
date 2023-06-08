import React, { useState } from "react";

const SingleItem = ({ checked, id, name, removeItem, modifyItem }) => {
  const [check, setCheck] = useState(checked);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setCheck(!check);
          modifyItem(id, !check);
        }}
      />
      <p className={check ? "strike" : ""}>{name}</p>
      <button
        className="remove-btn"
        type="button"
        onClick={() => removeItem(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;

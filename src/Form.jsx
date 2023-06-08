import React, { useState } from "react";

const Form = ({ addItem }) => {
  const [itemName, setItemName] = useState("");

  return (
    <form>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <button
          type="button"
          className="btn"
          onClick={() => {
            addItem(itemName);
            setItemName("");
          }}
        >
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;

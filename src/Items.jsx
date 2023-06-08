import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, modifyItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            {...item}
            removeItem={removeItem}
            modifyItem={modifyItem}
          />
        );
      })}
    </div>
  );
};

export default Items;

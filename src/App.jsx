import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";

const App = () => {
  const getLocalStorage = () => {
    let local = localStorage.getItem("list");
    if (local) {
      local = JSON.parse(localStorage.getItem("list"));
    } else {
      local = [];
    }
    return local;
  };
  const setLocalStroage = (items) => {
    localStorage.setItem("list", JSON.stringify(items));
  };
  const [items, setItems] = useState(getLocalStorage("list"));
  const addItem = (itemName) => {
    if (!itemName) {
      toast.warn("Name Cannot be Empty", { autoClose: 3000 });
    } else {
      const obj = {
        id: nanoid(),
        checked: false,
        name: itemName,
      };
      const newItems = [...items, obj];
      setItems(newItems);
      setLocalStroage(newItems);
      toast.success("Item Added Successfully", { autoClose: 3000 });
    }
  };
  const removeItem = (id) => {
    const filteredItems = items.filter((item) => {
      return id !== item.id;
    });
    setItems(filteredItems);
    setLocalStroage(filteredItems);
    toast.success("Item Removed", { autoClose: 3000 });
  };
  const modifyItem = (id, check) => {
    let newItems = [];
    items.map((item) => {
      if (item.id === id) {
        item.checked = check;
      }
      newItems.push(item);
    });
    setItems(newItems);
    setLocalStroage(newItems);
  };
  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} modifyItem={modifyItem} />
    </section>
  );
};

export default App;

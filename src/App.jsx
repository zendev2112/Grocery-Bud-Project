import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./items";
const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      completed:false,
      id:nanoid(),
      name:itemName,
    };
    setItems([...items, newItem])
  };

  const removeItem = (itemId) => {}
  return <section className="section-center">
    <Form addItem={addItem}/>
    <Items addItem={addItem} removeItem={removeItem}/>
  </section>;
};

export default App;

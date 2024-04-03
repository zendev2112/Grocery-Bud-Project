import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      completed:false,
      id:nanoid(),
      name:itemName,
    };
    setItems([...items, newItem])
  }
  return <section className="section-center">
    <Form addItem={addItem}/>
  </section>;
};

export default App;

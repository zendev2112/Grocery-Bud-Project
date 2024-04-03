import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./items";

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  console.log(list);
}


const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}
const App = () => {
  getLocalStorage();
  const [items, setItems] = useState([]);

  const addItem = (itemName) => {
    const newItem = {
      completed:false,
      id:nanoid(),
      name:itemName,
    };
    const newItems = [...items, newItem]
    setItems(newItems);
    setLocalStorage(newItems)
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item)=>item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems)
  };


  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items } removeItem={removeItem} />
    </section>
  )
    
};

export default App;

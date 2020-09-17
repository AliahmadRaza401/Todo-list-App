import React, {useState} from 'react';
import './App.css';
import ToDoList from "./ToDoList";

function App() {
  const [item, newItem] = useState("");
  const [addItem, setaddItem] = useState( [] );

  const Inputval = (event) =>{
    newItem(event.target.value);
  };

  const listOfItems = () =>{
    setaddItem( (oldItems) =>{
       return [...oldItems, item];
    }); 
    newItem("");

  };

  const deleteItem = (id) => {
    console.log("delete Items");
    
    setaddItem((oldItems) => {
      return oldItems.filter((arryElem, index) => {
         return index !== id;
      })
    })
  };

  return (
    <div className="container">
      <div className="main">
        <br />
        <h1 className="title">Todo App</h1>
        <br />
        <input type="text" placeholder="add a Item" value={item} onChange={Inputval} ></input>
        <button className="add" onClick={listOfItems} > <i class="fas fa-plus"></i> </button>
        <ul>
          {
            addItem.map( (itemsval, index) => {
              return <ToDoList 
                        text={itemsval}
                        key={index}
                        id={index} 
                        onSelect={deleteItem}
                      />
            })
          }
        </ul>
          
      </div>
      
    </div>
  );
}

export default App;

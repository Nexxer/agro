import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import uuid from "react-uuid";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [toDoLists, setToDoLists] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();
    setToDoLists([...toDoLists, { text: item, done: false, id }]);
    setItem("");
  };

  const handleRemoveItem = (id) => {
    const newTodoList = toDoLists.filter((item) => item.id !== id);

    return setToDoLists(newTodoList);
  };

  const handleStatus = (id) => {
    setToDoLists(
      toDoLists.map((item) => {
        if (item.id === id) item.done = !item.done;
        return item;
      })
    );
  };

  const handleClear = () => setToDoLists([]);

  return (
    <div className="container-md mt-5 col-4-lg">
      <h1 className="text-uppercase text-center font-weight-bold">To do list</h1>
      <TodoInput handleChange={handleChange} handleSubmit={handleSubmit} item={item} />
      {toDoLists.length > 0 ? (
        <TodoList
          toDoLists={toDoLists}
          handleRemoveItem={handleRemoveItem}
          handleStatus={handleStatus}
          handleClear={handleClear}
        />
      ) : (
        <h2 className="text-center text-success">Заданий нет</h2>
      )}
    </div>
  );
}

export default App;

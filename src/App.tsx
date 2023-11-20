import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todo/todo.slice";
import { useAppSelector } from "./store";
import TodoList from "./components/Todo/TodoList"; // Import the TodoList component
import { RootState } from "./store/index"; // Import RootState type

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useAppSelector((state: RootState) => state.todo.todo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: new Date().getMilliseconds(),
        isCompleted: false,
        value: value,
      })
    );
    setValue(""); // Clear the input field after adding a task
  };

  return (
    <div className="flex justify-center flex-col items-center gap-2 mt-64">
      <p>GET IT DONE</p>
      <p>Just your tasks. Yes, that simple.</p>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="text-black px-1"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add
        </button>
      </form>
      <TodoList todos={todos} /> {/* Pass the todos array as a prop */}
    </div>
  );
}

export default App;

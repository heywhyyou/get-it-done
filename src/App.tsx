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
      <p className="font-bungee-shade text-3xl">GET IT DONE</p>
      <p className="font-roboto">Just your tasks. As simple as that.</p>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="custom-outline text-black px-1 outline focus-visible:outline"
        />
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center px-8"
        >
          Add
        </button>
      </form>
      <TodoList todos={todos} /> {/* Pass the todos array as a prop */}
    </div>
  );
}

export default App;

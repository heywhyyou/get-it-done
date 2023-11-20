import React from "react";
import TodoItem from "../TodoItem/TodoItem"; // Import the TodoItem component
import { ITodo } from "../../../store/todo/todo.slice";

interface Todo {
  id: number;
  value: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: ITodo[]; // Use ITodo[] type for todos prop
}
const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;

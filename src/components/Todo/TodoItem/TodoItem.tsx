import React from "react";

interface TodoItemProps {
  todo: {
    id: number;
    value: string;
    isCompleted: boolean;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return <li>{todo.value}</li>;
};

export default TodoItem;

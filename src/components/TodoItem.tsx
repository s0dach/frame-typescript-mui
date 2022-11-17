import { Checkbox } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { ITodos } from "../types/types";

interface TodoItemProps {
  todo: ITodos;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <TodoItemComponent>
      <Checkbox defaultChecked={todo.completed} />
      {todo.id}. {todo.title}
    </TodoItemComponent>
  );
};

const TodoItemComponent = styled("div")({
  border: "1px solid gray",
  padding: 8,
  borderRadius: 4,
  marginTop: "10px",
});

import axios from "axios";
import React from "react";
import List from "../components/List";
import { TodoItem } from "../components/TodoItem";
import { ITodos } from "../types/types";

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodos[]>([]);
  React.useEffect(() => {
    fetchTodos();
  }, []);
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodos[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=15"
      );
      setTodos(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <List
      items={todos}
      renderItem={(todos: ITodos) => <TodoItem todo={todos} key={todos.id} />}
    />
  );
};

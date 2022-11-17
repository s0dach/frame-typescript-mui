import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";
import { TodosPage } from "./pages/TodosPage";
import ButtonAppBar from "./components/Toolbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ButtonAppBar />
        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

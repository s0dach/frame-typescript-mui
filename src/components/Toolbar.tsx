import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

export default function Toolbar() {
  const navigate = useNavigate();
  return (
    <ToolbarComponent>
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/todos")}
      >
        Todos
      </Button>
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/users")}
      >
        Users
      </Button>
    </ToolbarComponent>
  );
}

const ToolbarComponent = styled("div")({
  display: "flex",
  justifyContent: "space-around",
});

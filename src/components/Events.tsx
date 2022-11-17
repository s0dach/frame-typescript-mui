// @deprecated

import React from "react";
import { Button, TextField } from "@mui/material";

export const Events = ({}) => {
  const [value, setValue] = React.useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };
  return (
    <div>
      <TextField value={value} onChange={onChange} />
      <Button onClick={onClick}>Клик</Button>
    </div>
  );
};

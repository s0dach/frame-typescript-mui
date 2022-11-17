import styled from "@emotion/styled";
import React from "react";
import { IUser } from "../types/types";

interface UserItemProps {
  user: IUser;
}

export const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <UserItemComponent>
      {user.id}. {user.name} живет в городе {user.address.city} на улице{" "}
      {user.address.street}
    </UserItemComponent>
  );
};

const UserItemComponent = styled("div")({
  border: "1px solid gray",
  padding: 8,
  borderRadius: 4,
  marginTop: "10px",
});

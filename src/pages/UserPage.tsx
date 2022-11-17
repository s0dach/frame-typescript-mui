import axios from "axios";
import React from "react";
import List from "../components/List";
import { UserItem } from "../components/UserItem";
import { IUser } from "../types/types";

export const UserPage: React.FC = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  React.useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
    />
  );
};

import React from "react";
import { useParams } from "react-router-dom";

const User = ({ users }) => {
  const { userId } = useParams();
  const user = users.find((user) => user.id.toString() === userId);

  return <h2>{user ? user.name : `User not found ${userId}`}</h2>;
};

export default User;

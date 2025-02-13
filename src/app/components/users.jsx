import React from "react";

const Users = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </>
  );
};

export default Users;

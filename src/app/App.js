import React from "react";
import NavBar from "./components/navBar";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Posts from "./components/posts";
import Home from "./components/home";
import Users from "./components/users";
import User from "./components/user";
import NotFound from "./components/notFound";

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "James" },
  { id: 3, name: "Dean" },
];

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/users/:userId" element={<User users={users} />} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts/:postId?" element={<Posts />} />
        <Route path="/admin" element={<Navigate to="/dashboard" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;

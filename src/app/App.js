import React from "react";
import NavBar from "./components/navBar";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Posts from "./components/posts";
import Home from "./components/home";

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/posts" component={Posts} />
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;

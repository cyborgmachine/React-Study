import { Routes, Route, Link } from "react-router-dom";
import Edit from "./edit";
import Stats from "./stats";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard/edit">Edit</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Stats />} />
        <Route path="edit" element={<Edit />} />
      </Routes>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;

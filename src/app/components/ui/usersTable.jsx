import React from "react";
import PropTypes from "prop-types";
import BookMark from "../common/bookmark.jsx";
import Qualities from "./qualities/quality.jsx";
import { Table, TableBody, TableHeader } from "../common/table/index.js";
import { useNavigate } from "react-router-dom";

const UsersTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookMark,
  onDelete,
}) => {
  const navigate = useNavigate();
  const goToUserPage = (user) => {
    navigate(`/users/${user._id}`, { state: { user } });
  };
  const columns = {
    name: {
      path: "name",
      name: "Name",
      component: (user) => (
        <button
          style={{ cursor: "pointer" }}
          className="btn btn-link"
          key={user._id}
          onClick={() => {
            goToUserPage(user);
          }}
        >
          {user.name}
        </button>
      ),
    },
    qualities: {
      name: "Qualities",
      component: (user) => (
        <>
          {user.qualities.map((qual) => (
            <Qualities key={qual._id} {...qual} />
          ))}
        </>
      ),
    },

    professions: { name: "Profession", path: "profession.name" },
    completedMeetings: { path: "completedMeetings", name: "Meeting, count" },
    rate: { path: "rate", name: "Score" },
    bookmark: {
      path: "bookmark",
      name: "Favorite",
      component: (user) => (
        <BookMark
          status={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      ),
    },
    delete: {
      component: (user) => (
        <button onClick={() => onDelete(user._id)} className="btn btn-danger">
          delete
        </button>
      ),
    },
  };
  return (
    <Table>
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
    </Table>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default UsersTable;

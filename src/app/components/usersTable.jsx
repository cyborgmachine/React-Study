import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import BookMark from "./bookmark";
import Quality from "./quality";

const UsersTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookMark,
  onDelete,
}) => {
  const columns = {
    name: { path: "name", name: "Name" },
    qualities: {
      name: "Qualities",
      component: (user) => (
        <>
          {user.qualities.map((qual) => (
            <Quality key={qual._id} {...qual} />
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
    <table className="table">
      <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: users }} />
      {/* <tbody>
        {users.map((user) => (
          <User {...rest} {...user} key={user._id} />
        ))}
      </tbody> */}
    </table>
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

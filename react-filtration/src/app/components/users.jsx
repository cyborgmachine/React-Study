import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import GroupList from "./groupList";
import API from "../api";
import SearchStatus from "./searchStatus";

const Users = ({ users: allUsers, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfession] = useState();
  const [selectedProf, setSelectedPro] = useState();
  const pageSize = 3;

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfession(data));
  }, []);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const handleProfessionSelect = (item) => {
    setSelectedPro(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const filteredUser = selectedProf
    ? allUsers.filter((user) => user.profession === selectedProf)
    : allUsers;
  const count = filteredUser.length;
  const usersCrop = paginate(filteredUser, currentPage, pageSize);
  const clearFilter = () => {
    setSelectedPro();
  };

  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={selectedProf}
            items={professions}
            onItemSelect={handleProfessionSelect}
            valueProperty="_id"
            contentProperty="name"
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Clear
          </button>
        </div>
      )}
      <div className="d-flex flex-column">
        <SearchStatus length={count} />
        {count > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Qualities</th>
                <th scope="col">Profession</th>
                <th scope="col">Meeting, count</th>
                <th scope="col">Score</th>
                <th scope="col">Favorite</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {usersCrop.map((user) => (
                <User {...rest} {...user} key={user._id} />
              ))}
            </tbody>
          </table>
        )}
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};
Users.propTypes = {
  users: PropTypes.array,
};

export default Users;

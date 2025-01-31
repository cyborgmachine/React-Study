import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) {
      return "people hanging out";
    }
    if (lastOne === 1) return "person hanging out";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "people hanging out";
    return "people hanging out";
  };
  return (
    <h2>
      <span className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
        {length > 0
          ? `${length + " " + renderPhrase(length)}   with you today`
          : "Nobody hanging out with you today"}
      </span>
    </h2>
  );
};

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired,
};

export default SearchStatus;

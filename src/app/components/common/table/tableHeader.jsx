import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      console.log(selectedSort);
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };

  const CaretClass = ({ columnpath }) => {
    if (selectedSort.path === columnpath) {
      // console.log(selectedSort.order);
      return (
        <i
          className={
            selectedSort.order === "asc"
              ? "bi bi-caret-down-fill ms-2"
              : "bi bi-caret-up-fill ms-2"
          }
        ></i>
      );
    } else {
      return null;
    }
  };

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && "button" }}
            scope="col"
          >
            {columns[column].name}
            <CaretClass columnpath={columns[column].path} />
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableHeader;

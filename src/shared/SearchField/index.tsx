import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import { useData } from "../../contexts/DataContext";
import { useTheme } from "../../contexts/Theme";
import React, { FC } from "react";
const SearchField: FC = () => {
  const theme = useTheme();
  const { setSearchText } = useData();

  const searchHandler = (e:any) => {
    setSearchText!(e.target.value);
  };

  return (
    <div
      className="search-field"
      style={{
        backgroundColor: theme.pallete.paper,
        boxShadow: `0 2px 8px 0 ${theme.pallete.dropShadow}`,
      }}
    >
      <FontAwesomeIcon color={theme.pallete.textSecondary} icon={faSearch} />
      <input
        onInput={searchHandler}
        placeholder="Search TODOs"
        style={{ color: theme.pallete.textPrimary }}
        type={"search"}
      />
    </div>
  );
};

export default SearchField;

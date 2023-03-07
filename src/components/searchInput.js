import { useState } from "react";
import SearchIcon from "../assets/images/searchIcon.svg";
//Standartized search input component
const SearchInput = (props) => {
  const {
    label,
    border,
    iconSize,
    fontSize,
    fontWeight,
    placeholder,
    height,
    handleChange,
    className,
  } = props;
  const [searchValue, setSearchValue] = useState("");

  // const handleChange = (e) => {
  //   setSearchValue(e.target.value);
  // };

  return (
    <section className="searchContainer">
      <h4
        className="searchLabel"
        style={{ fontSize: fontSize, fontWeight: fontWeight }}
      >
        {label}
      </h4>
      <div
        className={
          border === true
            ? "searchInputCotainer inputBorder"
            : "searchInputCotainer noBorder"
        }
      >
        <input
          className={`searchInput ${className}`}
          type="search"
          name="search"
          // value={searchValue}
          onChange={handleChange}
          style={{
            fontSize: fontSize,
            fontWeight: fontWeight,
            height: height && height,
          }}
          placeholder={placeholder}
        />
        <span className="searchIcon" style={{ width: iconSize }}>
          <img src={SearchIcon} alt="SearchIcon" />
        </span>
      </div>
    </section>
  );
};

export default SearchInput;

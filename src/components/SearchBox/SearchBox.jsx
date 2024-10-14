import { useDispatch } from "react-redux";
import { changeSearch } from "../../redux/filtersSlice";
// import { useId } from "react";

import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    dispatch(changeSearch(e.target.value));
  };

  return (
    <div className={s.searchBox}>
      <label htmlFor="search-input" className={s.searchLabel}>
        Find contacts by name
        <input
          className={s.searchInput}
          id="search-input"
          type="text"
          placeholder=""
          onChange={handleSelect}
        />
      </label>
    </div>
  );
};

export default SearchBox;

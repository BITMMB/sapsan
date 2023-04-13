import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./SearchForm.module.scss";
import iconSearch from "../Icons/iconSearch.svg";
import SearchButton from "../SearchButton/SearchButton";
import { addSearchData } from "../../Redux/itemslice";

function SearchForm() {
  const dispatch = useDispatch();
  const isStarted = useSelector((state) => state.itemslice.isStarted);
  return (
    <div
      className={isStarted ? classes.searchBlock : classes.searchBlockCenter}
    >
      <form className={classes.form}>
        <img src={iconSearch} className={classes.icon} alt="" />
        <input
          className={classes.input}
          type="search"
          placeholder="Телефоны, яблоки, груши..."
          onChange={(e) => dispatch(addSearchData(e.target.value))}
        ></input>
      </form>
      <SearchButton />
    </div>
  );
}

export default SearchForm;

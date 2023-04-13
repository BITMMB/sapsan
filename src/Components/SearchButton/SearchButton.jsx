import { useDispatch, useSelector } from "react-redux";
import classes from "./SearchButton.module.scss";
import { fetchData } from "../../Redux/itemslice";

function SearchButton() {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.itemslice.searchData);
  return (
    <button
      className={classes.button}
      onClick={() => dispatch(fetchData(searchData))}
    >
      Искать
    </button>
  );
}

export default SearchButton;

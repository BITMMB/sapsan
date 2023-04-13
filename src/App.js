import { useSelector } from "react-redux";
import SearchForm from "./Components/SearchForm";
import ResultGrid from "./Components/ResultGrid";
import Spiner from "./Components/Spiner";
import Popup from "./Components/Popup";
import classes from "./App.module.scss";

function App() {
  const isLoading = useSelector((state) => state.itemslice.isLoading);
  return (
    <div className={classes.app}>
      <SearchForm />
      {isLoading ? <Spiner /> : <ResultGrid />}
      <Popup />
    </div>
  );
}

export default App;

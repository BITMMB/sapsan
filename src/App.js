import { useSelector } from "react-redux";
import SearchForm from "./Components/SearchForm";
import ResultGrid from "./Components/ResultGrid";
import Spiner from "./Components/Spiner";
import Popup from "./Components/Popup";
import Noresult from "./Components/Noresult";
import classes from "./App.module.scss";

function App() {
  const isLoading = useSelector((state) => state.itemslice.isLoading);
  const isStarted = useSelector((state) => state.itemslice.isStarted);
  const data = useSelector((state) => state.itemslice.data);
  return (
    <div className={classes.app}>
      <SearchForm />
      {isLoading ? <Spiner /> : <ResultGrid />}
      {!isLoading && isStarted && data.length < 1 ? (
        <Noresult />
      ) : (
        <ResultGrid />
      )}
      <Popup />
    </div>
  );
}

export default App;

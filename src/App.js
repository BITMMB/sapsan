import { useSelector } from "react-redux";
import SearchForm from "./Components/SearchForm";
import ResultGrid from "./Components/ResultGrid";
import Spiner from "./Components/Spiner";
import Popup from "./Components/Popup";
import Noresult from "./Components/Noresult";
import classes from "./App.module.scss";

function App() {
  const isLoading = useSelector((state) => state.itemslice.isLoading);
  const noData = useSelector((state) => state.itemslice.noData);

  console.log(noData);
  return (
    <div className={classes.app}>
      <SearchForm />
      {isLoading ? <Spiner /> : <ResultGrid />}
      {!isLoading && noData ? <Noresult /> : null}
      <Popup />
    </div>
  );
}

export default App;

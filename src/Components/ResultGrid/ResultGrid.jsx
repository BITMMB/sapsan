import Item from "../Item";
import React from "react";
import classes from "./ResultGrid.module.scss";
import { useSelector } from "react-redux";

function ResultGrid() {
  const data = useSelector((state) => state.itemslice.data);
  const isStarted = useSelector((state) => state.itemslice.isStarted);
  let res = data.map((el) => {
    return <Item url={el.urls.small} key={Math.random()} />;
  });
  return (
    <div className={classes.grid}>
      {!isStarted || res.length > 0
        ? res
        : "К сожалению, поиск не дал результатов"}
    </div>
  );
}

export default ResultGrid;

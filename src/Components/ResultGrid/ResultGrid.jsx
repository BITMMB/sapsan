import Item from "../Item";
import React from "react";
import classes from "./ResultGrid.module.scss";
import { useSelector } from "react-redux";

function ResultGrid() {
  const data = useSelector((state) => state.itemslice.data);

  let res = data.map((el) => {
    return <Item url={el.urls.small} key={Math.random()} />;
  });
  return <div className={classes.grid}>{res}</div>;
}

export default ResultGrid;

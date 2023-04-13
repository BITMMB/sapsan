import React from "react";
import { useDispatch } from "react-redux";
import { changePopupActive } from "../../Redux/itemslice";
import classes from "./Item.module.scss";

function Item({ url }) {
  const dispatch = useDispatch();
  return (
    <div className={classes.block}>
      <img
        className={classes.img}
        alt="img"
        src={url}
        onClick={() => {
          dispatch(changePopupActive(url));
        }}
      ></img>
    </div>
  );
}

export default Item;

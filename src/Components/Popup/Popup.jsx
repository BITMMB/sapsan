import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changePopupActive } from "../../Redux/itemslice";
import classes from "./Popup.module.scss";

function PopUp({ popActive, setPopActive, url }) {
  const dispatch = useDispatch();
  const isPopupActive = useSelector((state) => state.itemslice.isPopupActive);
  return (
    <div
      className={isPopupActive ? classes.block : classes.noActive}
      onClick={() => {
        dispatch(changePopupActive(false));
      }}
    >
      <img
        alt="img"
        src={isPopupActive ? isPopupActive : ""}
        className={classes.img}
      ></img>
    </div>
  );
}

export default PopUp;

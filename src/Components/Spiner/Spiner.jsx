import React from "react";
import classes from "./Spiner.module.scss";

function Spiner() {
  return (
    <div className={classes.spiner}>
      <div className={classes.loader}>
        <div className={classes.loadersegment}></div>
        <div className={classes.loadersegment}></div>
        <div className={classes.loadersegment}></div>
        <div className={classes.loadersegment}></div>
        <div className={classes.loadersegment}></div>
        <div className={classes.loadersegment}></div>
        <div className={classes.loadersegment}></div>
        <div className={classes.loadersegment}></div>
      </div>
    </div>
  );
}

export default Spiner;

import React from "react";
import classes from "./Loading.module.css";
import { useSelector } from "react-redux";

const Loading = () => {
  const themeColor = useSelector((state) => state.setting.themeColor);
  return (
    <div className={classes.container}>
      <div
        className={classes.loadingContainer}
        style={{ backgroundColor: `${themeColor}` }}
      >
        <div className={classes.loader}>?</div>
        <div className={classes.loadingText}>Loading...</div>
      </div>
    </div>
  );
};

export default Loading;

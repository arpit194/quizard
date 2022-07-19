import React from "react";
import classes from "./Categories.module.css";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/game";

const Category = (props) => {
  const themeColor = useSelector((state) => state.setting.themeColor);
  const dispatch = useDispatch();

  return (
    <div
      className={classes.category}
      style={{ color: themeColor }}
      onClick={() => {
        dispatch(gameActions.setCategory(props.id));
        dispatch(gameActions.setGameState("Game"));
      }}
    >
      <img alt={props.name} src={props.imageURL} />
      <span>{props.name}</span>
    </div>
  );
};

export default Category;

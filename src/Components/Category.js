import React from "react";
import classes from "../Pages/Categories.module.css";
import { useSelector } from "react-redux";

const Category = (props) => {
  const themeColor = useSelector((state) => state.setting.themeColor);

  return (
    <div
      className={classes.category}
      style={{ color: themeColor }}
      onClick={() => {
        props.startQuiz(props.id);
      }}
    >
      <img alt={props.name} src={props.imageURL} />
      <span>{props.name}</span>
    </div>
  );
};

export default Category;

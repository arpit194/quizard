import React from "react";
import classes from "./Categories.module.css";

const Category = (props) => {
  return (
    <div className={classes.category}>
      <img alt={props.name} src={props.imageURL} />
      <span>{props.name}</span>
    </div>
  );
};

export default Category;

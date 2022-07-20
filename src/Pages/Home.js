import React from "react";
import classes from "./Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/game";

const Home = () => {
  const themeColor = useSelector((state) => state.setting.themeColor);
  const dispatch = useDispatch();

  return (
    <div
      className={classes.homeContainer}
      style={{ backgroundColor: themeColor }}
    >
      <span className={classes.text}>
        Are you ready to enter the world of quizard?
      </span>
      <button
        className={classes.play}
        onClick={() => {
          dispatch(gameActions.setGameState("Categories"));
        }}
      >
        Play
      </button>
    </div>
  );
};

export default Home;

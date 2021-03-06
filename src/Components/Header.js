import React from "react";
import classes from "./Header.module.css";
import Settings from "./Settings";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../store/game";

const Header = () => {
  const dispatch = useDispatch();

  const themeColor = useSelector((state) => state.setting.themeColor);

  return (
    <div className={classes.nav} style={{ backgroundColor: `${themeColor}` }}>
      <div
        className={classes.brand}
        onClick={() => {
          dispatch(gameActions.setGameState("Home"));
        }}
      >
        <div className={classes.logo}>
          <img
            alt="quizard"
            src="https://img.favpng.com/21/11/8/new-york-city-fotolia-stock-photography-sales-png-favpng-f9ZiUMqBcZK0LNfZPfC674ZxZ_t.jpg"
          />
        </div>
        <div className={classes.brandName}>Quizard</div>
      </div>
      <Settings />
    </div>
  );
};

export default Header;

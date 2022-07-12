import React from "react";
import classes from "./Header.module.css";
import Settings from "./Settings";

const Header = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.brand}>
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

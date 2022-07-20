import React, { useEffect, useRef, useState } from "react";
import classes from "./Settings.module.css";
import { useSelector, useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faVolumeUp,
  faVolumeMute,
  faFaceMeh,
  faFaceSmile,
  faFaceSurprise,
} from "@fortawesome/free-solid-svg-icons";
import { settingActions } from "../store/settings";

const colors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];

const questionNo = [5, 10, 15];

const times = [30, 60, 90, 120];

const Settings = () => {
  const settings = useRef();
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const { themeColor, difficulty, quesNo, timer, sound } = useSelector(
    (state) => state.setting
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setOpen(false);
  }, []);

  const openSettings = () => {
    setRotate(!rotate);
    if (open) {
      setTimeout(() => {
        setOpen(!open);
      }, 400);
      settings.current.classList.remove(classes.openSettings);
      settings.current.classList.add(classes.closeSettings);
    } else {
      setOpen(!open);
    }
  };

  return (
    <div className={classes.settings}>
      <FontAwesomeIcon
        icon={faGear}
        className={`${classes.settingsLogo} ${rotate && classes.logoRotate}`}
        onClick={openSettings}
      />
      {open && (
        <div
          className={`${classes.settingsContainer} ${classes.openSettings}`}
          ref={settings}
          style={{ border: `10px solid ${themeColor}` }}
        >
          <div className={classes.settingsDisplay}>
            <div className={classes.settingsControl}>
              <div className={classes.settingName}>Sound</div>
              {sound ? (
                <FontAwesomeIcon
                  icon={faVolumeUp}
                  className={classes.icon}
                  style={{ backgroundColor: themeColor }}
                  onClick={() => {
                    dispatch(settingActions.setSound(false));
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faVolumeMute}
                  className={classes.icon}
                  style={{ backgroundColor: themeColor }}
                  onClick={() => {
                    dispatch(settingActions.setSound(true));
                  }}
                />
              )}
            </div>
            <div className={classes.settingsControl}>
              <div className={classes.settingName}>Difficulty</div>
              <FontAwesomeIcon
                icon={faFaceSmile}
                className={`${classes.icon} ${
                  difficulty === "easy" && classes.activeIcon
                }`}
                style={{ backgroundColor: themeColor }}
                onClick={() => {
                  dispatch(settingActions.setDifficulty("easy"));
                }}
              />
              <FontAwesomeIcon
                icon={faFaceMeh}
                className={`${classes.icon} ${
                  difficulty === "medium" && classes.activeIcon
                }`}
                style={{ backgroundColor: themeColor }}
                onClick={() => {
                  dispatch(settingActions.setDifficulty("medium"));
                }}
              />
              <FontAwesomeIcon
                icon={faFaceSurprise}
                className={`${classes.icon} ${
                  difficulty === "hard" && classes.activeIcon
                }`}
                style={{ backgroundColor: themeColor }}
                onClick={() => {
                  dispatch(settingActions.setDifficulty("hard"));
                }}
              />
            </div>
            <div className={classes.settingsControl}>
              <div className={classes.settingName}>Theme</div>
              {colors.map((color) => (
                <div
                  key={color}
                  className={`${classes.themeColor} ${
                    themeColor === color && classes.activeTheme
                  }`}
                  style={{ backgroundColor: color, color: color }}
                  onClick={() => {
                    dispatch(settingActions.setThemeColor(color));
                  }}
                ></div>
              ))}
            </div>
            <div className={classes.settingsControl}>
              <div className={classes.settingName}>No. of questions</div>
              {questionNo.map((no) => (
                <div
                  key={no}
                  className={`${classes.gameSetting} ${
                    no == quesNo && classes.activeIcon
                  }`}
                  style={{ backgroundColor: themeColor }}
                  onClick={() => {
                    dispatch(settingActions.setQuesNo(no));
                  }}
                >
                  {no}
                </div>
              ))}
            </div>
            <div className={classes.settingsControl}>
              <div className={classes.settingName}>Timer</div>
              {times.map((time) => (
                <div
                  key={time}
                  className={`${classes.gameSetting} ${
                    time == timer && classes.activeIcon
                  }`}
                  style={{ backgroundColor: themeColor }}
                  onClick={() => {
                    dispatch(settingActions.setTimer(time));
                  }}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;

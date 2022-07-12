import React, { useEffect, useRef, useState } from "react";
import classes from "./Settings.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faVolumeUp,
  faFaceMeh,
  faFaceSmile,
  faFaceSurprise,
} from "@fortawesome/free-solid-svg-icons";

const Settings = () => {
  const settings = useRef();
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

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
        >
          <div className={classes.settingsDisplay}>
            <div className={classes.settingsControl}>
              <span>Sound:</span>
              <FontAwesomeIcon icon={faVolumeUp} />
            </div>
            <div className={classes.settingsControl}>
              <span>Difficulty:</span>
              <FontAwesomeIcon icon={faFaceSmile} />
              <FontAwesomeIcon icon={faFaceMeh} />
              <FontAwesomeIcon icon={faFaceSurprise} />
            </div>
            <div className={classes.settingsControl}>
              <div className={classes.themeColor}></div>
              <div className={classes.themeColor}></div>
              <div className={classes.themeColor}></div>
              <div className={classes.themeColor}></div>
              <div
                className={`${classes.themeColor} ${classes.activeTheme}`}
              ></div>
              <div className={classes.themeColor}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;

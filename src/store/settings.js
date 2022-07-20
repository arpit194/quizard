import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sound: JSON.parse(localStorage.getItem("sound")) ? false : true,
  difficulty: localStorage.getItem("difficulty")
    ? localStorage.getItem("difficulty")
    : "easy",
  themeColor: localStorage.getItem("themeColor")
    ? localStorage.getItem("themeColor")
    : "#264653",
  quesNo: localStorage.getItem("quesNo")
    ? localStorage.getItem("quesNo")
    : "10",
  timer: localStorage.getItem("timer") ? localStorage.getItem("timer") : "60",
};

const settingSlice = createSlice({
  name: "Setting",
  initialState: initialState,
  reducers: {
    setSound: (state) => {
      state.sound = !state.sound;
      localStorage.setItem("sound", !state.sound);
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
      localStorage.setItem("difficulty", action.payload);
    },
    setThemeColor: (state, action) => {
      state.themeColor = action.payload;
      localStorage.setItem("themeColor", action.payload);
    },
    setQuesNo: (state, action) => {
      state.quesNo = action.payload;
      localStorage.setItem("quesNo", action.payload);
    },
    setTimer: (state, action) => {
      state.timer = action.payload;
      localStorage.setItem("timer", action.payload);
    },
  },
});

export const settingActions = settingSlice.actions;

export default settingSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = { sound: true, difficulty: "Easy", themeColor: "#264653" };

const settingSlice = createSlice({
  name: "Setting",
  initialState: initialState,
  reducers: {
    setSound: (state) => {
      state.sound = !state.sound;
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setThemeColor: (state, action) => {
      state.themeColor = action.payload;
    },
  },
});

export const settingActions = settingSlice.actions;

export default settingSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./game";
import settingSlice from "./settings";

export const store = configureStore({
  reducer: { setting: settingSlice, game: gameSlice },
});

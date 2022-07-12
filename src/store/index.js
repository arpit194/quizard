import { configureStore } from "@reduxjs/toolkit";
import settingSlice from "./settings";

export const store = configureStore({
  reducer: { setting: settingSlice },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameState: "Categories",
  questions: null,
  currentQuestion: null,
  category: 0,
};

const gameSlice = createSlice({
  name: "Game",
  initialState: initialState,
  reducers: {
    setGameState: (state, action) => {
      state.gameState = action.payload;
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setQuesttions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;

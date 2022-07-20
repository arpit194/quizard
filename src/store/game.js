import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gameState: "Home",
  loading: false,
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;

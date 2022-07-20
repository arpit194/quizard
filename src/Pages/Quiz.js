import React, { useEffect, useState, useRef, useMemo } from "react";
import classes from "./Quiz.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useFetch } from "../hooks/useFetch";
import { gameActions } from "../store/game";
import { decode } from "html-entities";
import clock from "../assets/sounds/clock.mp3";
import correct from "../assets/sounds/correct1.mp3";
import wrong from "../assets/sounds/wrong.mp3";

const clockAudio = new Audio(clock);
const correctAudio = new Audio(correct);
const wrongAudio = new Audio(wrong);

const Quiz = () => {
  const { themeColor, difficulty, quesNo, timer } = useSelector(
    (state) => state.setting
  );
  const { category, questions, currentQuestion } = useSelector(
    (state) => state.game
  );
  const question = useSelector((state) => state.game.currentQuestion);

  const [questionNo, setQuestionNo] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [points, setPoints] = useState(0);
  const [options, setOptions] = useState([]);
  const [intervals, setIntervals] = useState(null);
  const [categoryName, setCategory] = useState(null);

  const ref = useRef();
  const nextRef = useRef();
  const timerRef = useRef();

  const dispatch = useDispatch();

  const { error, sendRequest, clearError } = useFetch();

  useEffect(() => {
    const getQuestions = async () => {
      const res = await sendRequest(difficulty, category, quesNo);
      dispatch(gameActions.setQuestions(res.results));
      dispatch(gameActions.setCurrentQuestion(res.results[questionNo - 1]));
      setOptions(
        [
          res.results[questionNo - 1]["correct_answer"],
          ...res.results[questionNo - 1]["incorrect_answers"],
        ].sort(() => 0.5 - Math.random())
      );
      timerRef.current.innerHTML = timer;
    };
    getQuestions();
  }, []);

  const checkAnswer = (e) => {
    if (questionNo === 1) {
      startTimer();
    }
    if (decode(currentQuestion.correct_answer) === e.target.innerHTML) {
      setPoints(points + 1);
      e.target.classList.add(classes.correct);
      correctAudio.play();
    } else {
      e.target.classList.add(classes.incorrect);
      wrongAudio.play();
    }

    if (questionNo < quesNo) {
      const timeout = setTimeout(() => {
        setQuestionNo(questionNo + 1);
        dispatch(gameActions.setCurrentQuestion(questions[questionNo]));
        setOptions(
          [
            questions[questionNo]["correct_answer"],
            ...questions[questionNo]["incorrect_answers"],
          ].sort(() => 0.5 - Math.random())
        );
        nextRef.current.style.display = "none";
      }, 2500);
      nextRef.current.style.display = "flex";
      const nextTimeout = setTimeout(() => {
        nextRef.current.style.display = "none";
        clearTimeout(nextTimeout);
        ref.current.style.pointerEvents = "none";
        const eventTimeout = setTimeout(() => {
          ref.current.style.pointerEvents = "auto";
          clearTimeout(eventTimeout);
        }, 500);
      }, 2000);
      nextRef.current.onclick = () => {
        clearTimeout(timeout);
        setQuestionNo(questionNo + 1);
        dispatch(gameActions.setCurrentQuestion(questions[questionNo]));
        setOptions(
          [
            questions[questionNo]["correct_answer"],
            ...questions[questionNo]["incorrect_answers"],
          ].sort(() => 0.5 - Math.random())
        );
        nextRef.current.style.display = "none";
        clearTimeout(nextTimeout);
      };
    } else {
      gameEnd();
    }
  };

  const startTimer = () => {
    const timerInterval = setInterval(() => {
      const time = parseInt(timerRef.current.innerHTML);
      if (time == 0) {
        clearInterval(timerInterval);
        gameEnd();
      }
      if (time == 6) {
        clockAudio.play();
      }
      if (time > 0) {
        timerRef.current.innerHTML = time - 1;
      }
    }, 1000);
    setIntervals(timerInterval);
  };

  const gameEnd = () => {
    setTimeout(() => {
      setGameOver(true);
      setCategory(
        category === 0
          ? "Miscellaneous"
          : category === 1
          ? "Random"
          : currentQuestion.category
      );
      dispatch(gameActions.setCurrentQuestion(null));
      dispatch(gameActions.setQuestions(null));
    }, 2500);
    ref.current.style.pointerEvents = "none";
    clearInterval(intervals);
    clockAudio.pause();
    clockAudio.currentTime = 0;
  };

  return (
    <div
      className={classes.quizContainer}
      style={{ backgroundColor: themeColor }}
    >
      {gameOver && (
        <div className={classes.endScreen}>
          <div className={classes.endDetails}>
            <div className={classes.endCategory}>{categoryName}</div>
            <div className={classes.endDifficulty}>
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </div>
            <div className={classes.endQuestionNo}>
              {points}/{quesNo}
            </div>
          </div>
          <div className={classes.score}>Score: {points}</div>
          <div className={classes.endControls}>
            <input className={classes.userName} />
            <button className={classes.save}>Save Score</button>
            <button
              className={classes.restart}
              style={{ backgroundColor: themeColor }}
              onClick={() => {
                dispatch(gameActions.setGameState("Home"));
              }}
            >
              Restart
            </button>
          </div>
        </div>
      )}
      {!gameOver && (
        <>
          <div className={classes.details}>
            <div className={classes.category}>
              {currentQuestion && currentQuestion.category}
            </div>
            <div className={classes.difficulty}>
              {currentQuestion &&
                currentQuestion.difficulty.charAt(0).toUpperCase() +
                  currentQuestion.difficulty.slice(1)}
            </div>
            <div className={classes.quesNo}>
              {currentQuestion && questionNo + "/" + quesNo}
            </div>
            <div className={classes.quesNo}>Score: {points}</div>
            {error && <div>{error}</div>}
            <div
              className={classes.timer}
              ref={timerRef}
              style={{ backgroundColor: themeColor }}
            ></div>
          </div>
          <div className={classes.question}>
            {currentQuestion && decode(currentQuestion.question)}
          </div>
          <div className={classes.options} ref={ref}>
            <div
              className={classes.nextContainer}
              ref={nextRef}
              style={{ display: "none" }}
            >
              <div className={classes.next}>Next</div>
            </div>
            {options.map((option) => (
              <div
                key={option}
                className={classes.option}
                onClick={checkAnswer}
              >
                {decode(option)}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;

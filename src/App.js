import classes from "./App.module.css";
import Categories from "./Pages/Categories";
import Header from "./Components/Header";
import { useSelector } from "react-redux";
import Loading from "./Components/Loading";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";

function App() {
  const gameState = useSelector((state) => state.game.gameState);
  const loading = useSelector((state) => state.game.loading);
  return (
    <div className={classes.container}>
      <Header />
      {gameState === "Home" && <Home />}
      {gameState === "Categories" && <Categories />}
      {gameState === "Quiz" && <Quiz />}
      {loading && <Loading />}
    </div>
  );
}

export default App;

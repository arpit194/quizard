import classes from "./App.module.css";
import Categories from "./Components/Categories";
import Header from "./Components/Header";
import { useSelector } from "react-redux";
import Loading from "./Components/Loading";

function App() {
  const gameState = useSelector((state) => state.game.gameState);
  return (
    <div className={classes.container}>
      <Header />
      {gameState === "Categories" && <Categories />}
      {gameState === "Loading" && <Loading />}
    </div>
  );
}

export default App;

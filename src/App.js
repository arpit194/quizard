import classes from "./App.module.css";
import Categories from "./Components/Categories";
import Header from "./Components/Header";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Categories />
    </div>
  );
}

export default App;

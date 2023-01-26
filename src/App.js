import React, { Fragment } from "react";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";
import Meals from "./Components/Meals/Meals";
function App() {
  return (
    <Fragment>
    <Header />
    <main>
      <Meals />
    </main>
  </Fragment>
  );
}

export default App;
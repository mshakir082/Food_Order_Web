import React, { Fragment } from "react";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  return (
  <Fragment>
    <Cart/>
    <Header />
    <main>
      <Meals />
    </main>
  </Fragment>
  );
}

export default App;
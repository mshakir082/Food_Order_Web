import React, { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Meals/MealsSummary";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {

  const [cartShown, setCartShown] = useState(false);
  const showCartHandler = () => {
    setCartShown(true);
  }
  const hideCartHandler = () => {
    setCartShown(false)
  };

  return (
  <Fragment>
   { cartShown && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={showCartHandler} />
    <main>
      <Meals />
    </main>
  </Fragment>
  );
}

export default App;
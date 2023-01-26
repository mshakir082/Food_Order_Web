import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Butter Naan ',
      description: ' maida naan dipped in butter     ',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Daal Makhni ',
      description: ' Daal with loded butter and tadka   ',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Kadhai paneer ',
      description: ' Paneer and various veggies     ',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Veg Kofta ',
      description: ' made from bottlegaurd     ',
      price: 18.99,
    },
  ];
  const AvailableMeals = () => {

  const mealsList = DUMMY_MEALS.map(meal => 

    <MealItem 
    key={meal.id}
    name={meal.name} 
    description={meal.description} 
    price={meal.price} />

   );
return <section className={classes.meal}>
        <Card>
            <ul >
                {mealsList}
            </ul>
        </Card>
    </section>
}
export default AvailableMeals;
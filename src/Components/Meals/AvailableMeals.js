import classes from "./AvailableMeals.module.css";
 
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

         <li>
         {meal.name} 
         {meal.description}
         {meal.price}
         </li> 
   );
return <section className={classes.meals}>
    <ul className={classes.mealsList}>
        {mealsList}
    </ul>
</section>
}
export default AvailableMeals;
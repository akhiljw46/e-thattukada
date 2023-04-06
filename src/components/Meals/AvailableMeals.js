import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://react-http-c95e2-default-rtdb.firebaseio.com/meals.json'
      );
      const resData = await res.json();

      const loadedMeals = [];

      for (const key in resData) {
        loadedMeals.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: +resData[key].price,
        });
      }

      setMeals(loadedMeals);
    };
    fetchData();
  }, []);

  const mealsLis = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    >
      {meal.name}
    </MealItem>
  ));
  return (
    <section className={classes.meals}>
      <Card>
        {/* <ul>Hi</ul> */}
        <ul>{mealsLis}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;

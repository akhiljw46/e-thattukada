import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_DATABASE_URL}/meals.json`
      );

      if (!res.ok) throw new Error('Something went wrong!');

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
      setIsLoading(false);
    };

    fetchData().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading)
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );

  if (httpError)
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );

  const mealsLis = meals.map(meal => (
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

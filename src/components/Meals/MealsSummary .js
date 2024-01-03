import classes from './MealsSummary.module.css';
import { Parallax } from 'react-scroll-parallax';

const MealsSummary = () => {
  return (
    <Parallax speed={20} className={classes.summary}>
      <h2>Thani Naadan Food, Delivered To You</h2>
      <p>
        Choose your favorite drink, palahaaram or meal from our broad menu and
        enjoy a delicious meal at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chef maaman!
      </p>
    </Parallax>
  );
};

export default MealsSummary;

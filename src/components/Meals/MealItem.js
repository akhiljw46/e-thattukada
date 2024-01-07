import { useContext } from 'react';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';
import { Parallax } from 'react-scroll-parallax';

const MealItem = props => {
  const cartCtx = useContext(CartContext);

  const price = `₹${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    });
  };

  return (
    <Parallax opacity={[0, 7]}>
      <li className={classes.meal}>
        <div>
          <div className={classes.mealimage}>
            <img src={props.image} alt={props.name} />
          </div>
          <h3>{props.name}</h3>
          <div className={classes.card}>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
          </div>
        </div>
        <div>
          <MealItemForm onAddToCart={addToCartHandler} />
        </div>
      </li>
    </Parallax>
  );
};

export default MealItem;

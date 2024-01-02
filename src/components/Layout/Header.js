import mealsImage from '../../assets/cover_large.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import logo from '../../assets/logo.png';
import { Parallax } from 'react-scroll-parallax';

const Header = props => {
  return (
    <>
      <header className={classes.header}>
        {/* <h1>e-Thattukada🍵</h1> */}

        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>

      <Parallax speed={-50}>
        <div className={classes['main-image']}>
          <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
      </Parallax>
    </>
  );
};

export default Header;

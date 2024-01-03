import mealsImage from '../../assets/cover_large.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import logo from '../../assets/logo.png';
import { Parallax } from 'react-scroll-parallax';
import { useState } from 'react';
import banner from '../../assets/banner.png';

const Header = props => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  return (
    <>
      <header
        className={`${classes.header} ${
          isHeaderVisible ? classes.visible : ''
        }`}
      >
        {/* <h1>e-Thattukada🍵</h1> */}
        <div className={classes.banner}>
          <img src={banner} alt="logo" />
        </div>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <Parallax
        onEnter={() => setIsHeaderVisible(false)}
        onExit={() => setIsHeaderVisible(true)}
        className={classes.logo}
      >
        <img src={logo} alt="logo" />
      </Parallax>

      <Parallax speed={-60}>
        <div className={classes['main-image']}>
          <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
      </Parallax>
    </>
  );
};

export default Header;

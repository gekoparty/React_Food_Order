import React from "react";
import classes from "./Header.module.css";
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meal</h1>
        <HeaderCartButton />
      </header>
      <div class={classes['main-image']}>
          <img src={mealsImage} alt="A table full of delious food"/>
      </div>
    </React.Fragment>
  );
};

export default Header;

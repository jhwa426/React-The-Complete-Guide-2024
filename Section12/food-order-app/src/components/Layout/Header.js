import { Fragment } from "react";

import classes from './Header.module.css';
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";


const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>

            <div className={classes["main-image"]}>
                {/* <img src="./img/meals.jpg" alt="meal" />  */} {/* this is from "public" folder */}
                <img src={mealsImage} alt="meal" /> {/* alternatively we can create "assets" folder and call  */}
                {/* className={classes["main-image img"]} */}
            </div>
        </Fragment>
    );
}

export default Header;
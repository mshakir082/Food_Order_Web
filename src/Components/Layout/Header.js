import React, {Fragment} from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import food_logo  from '../../Hussain_Food_Logo.png'
const Header = props => {
    return(
     <Fragment>
        <header className={classes.header} >
           <div className={classes.header_logo_container}> 
            <img src={food_logo} alt='logo' className={classes.header_logo_img}/>
            <h3 className={classes.header_logo_title}>Hussain Food</h3>
           </div>
           <HeaderCartButton  onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src = {'https://b.zmtcdn.com/mx-onboarding-hero87f77501659a5656cad54d98e72bf0d81627911821.webp'} alt= "restaurant_image "></img>
        </div>
    </Fragment>
    )
}

export default Header;
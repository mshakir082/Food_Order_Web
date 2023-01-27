import React, {Fragment} from "react";
import mealsImage from '../../Assets/restaurant-2.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
import food_logo  from '../../Hussain_Food_Logo.png'
const Header = props => {
    return(
     <Fragment>
        <header className={classes.header} >
           <div style={{display:'flex',justifyContent:'center',width:'15%'}}> 
            <img src={food_logo} alt='logo' style={{width:'30%',height:'15%',margin:'auto'}}/>
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
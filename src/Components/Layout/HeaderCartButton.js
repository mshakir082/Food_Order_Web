import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartbutton.module.css'


const HeaderCartButton = props => {
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span> Cart</span>
        <span className={classes.badge}> 7</span>
    </button>

}
export default HeaderCartButton;
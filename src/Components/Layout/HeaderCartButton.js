import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartbutton.module.css'
import { useContext } from "react";
import CartContext from "../../Store/Cart-context";

const HeaderCartButton = props => {
    const cartCtx =  useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
     return currNumber + item.amount
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span> Cart</span>
        <span className={classes.badge}> {numberOfCartItems}</span>
    </button>

}
export default HeaderCartButton;
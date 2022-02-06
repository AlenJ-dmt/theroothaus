import "./Cart.scss"
import { BsChevronDoubleLeft } from "react-icons/bs"

export const Cart = () => {
    return (
        <div className="cart">
            <div className="cart-header">
                <BsChevronDoubleLeft />
                <p>Cart</p>
                <p>0 item(s)</p>
            </div>
            <div className="cart-container">
                <p>Your cart is currently empty</p>
            </div>
        </div>
    )
}

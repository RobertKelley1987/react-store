import { CartItem, CartAction } from "../../types";
import CartProduct from './CartProduct';
import './CartPage.css';

type CartProps = {
    cart: CartItem[],
    dispatch: React.Dispatch<CartAction>
}

const cartTotal = (cart: CartItem[]) => {
    const total = cart.reduce((prevVal, currVal) => (currVal.product.price * currVal.qty) + prevVal, 0);
    return Math.round(total * 100) / 100;
}

const CartPage = ({ cart, dispatch }: CartProps) => {  
    const emptyCartMessage = <p>There are no items in your cart.</p> 
    
    const renderPage = () => {
        return (
            <main className="cart-page">
                <h1 className="cart-page-heading">Shopping Cart</h1>
                <div className="cart-page-grid">
                    <div className="cart-page-items">
                        {cart.map(item => <CartProduct key={item.product.id} item={item} dispatch={dispatch} />)}
                    </div>

                    <div className="cart-page-summary">
                        <div className="cart-page-subtotal-wrapper">
                            <span>Subtotal</span>
                            <span>${cartTotal(cart)}</span>
                        </div>
                        <button className="button button-black cart-page-button">Checkout</button>
                    </div>
                </div>
            </main>
        )
    }

    return cart.length ? renderPage() : emptyCartMessage;
}

export default CartPage;
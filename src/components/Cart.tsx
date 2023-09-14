import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import { cartTotal } from '../utils/cart';
import { CartItem, CartAction } from '../types';
import './Cart.css';

type CartProps = {
    cart: CartItem[],
    dispatch: React.Dispatch<CartAction>,
    cartStyle: 'small' | 'large'
}

const STYLES = {
    'small': {
        grid: 'cart-grid cart-grid-small',
        subtotal: 'cart-subtotal-wrapper cart-subtotal-wrapper-small'
    },
    'large': {
        grid: 'cart-grid',
        subtotal: 'cart-subtotal-wrapper'
    }
}

const Cart = ({ cart, dispatch, cartStyle }: CartProps) => {
    const renderCart = () => {
        return (
            <div className={STYLES[cartStyle].grid}>
                <div className="cart-items">
                    {cart.map(item => <CartProduct key={item.product.id} item={item} dispatch={dispatch} cartStyle={cartStyle} />)}
                </div>

                <div className="cart-summary">
                    <div className={STYLES[cartStyle].subtotal}>
                        <span>Subtotal</span>
                        <span>${cartTotal(cart)}</span>
                    </div>
                    <Link to='/checkout' className="button button-black cart-button">Checkout</Link>
                </div>
            </div>
        )
    }

    const emptyCartMessage = <p className="cart-empty-message">There are no items in your cart.</p>;

    return (!cart.length && cartStyle === 'small') ? emptyCartMessage : renderCart();
}

export default Cart;
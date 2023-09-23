import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import { formatMoney } from '../utils';
import { cartTotal } from '../utils/cart';
import { CartItem, CartAction } from '../types';
import './Cart.css';

type CartProps = {
    cart: CartItem[],
    dispatch: React.Dispatch<CartAction>,
    cartStyle: 'small' | 'large',
    buttonOption: 'cart' | 'checkout'
}

const STYLES = {
    'small': {
        grid: 'cart-grid cart-grid-small',
        subtotal: 'cart-subtotal-wrapper cart-subtotal-wrapper-small',
        emptyMessage: 'cart-empty-message cart-empty-message-small',
    },
    'large': {
        grid: 'cart-grid',
        subtotal: 'cart-subtotal-wrapper',
        emptyMessage: 'cart-empty-message',
    }
}

const BUTTON_OPTIONS = {
    'cart': { text: 'Go To Cart', link: '/cart' },
    'checkout': { text: 'Checkout', link: '/checkout/info' }
}

const Cart = ({ cart, dispatch, cartStyle, buttonOption }: CartProps) => {
    const cartValue = cartTotal(cart);
    const { grid, subtotal, emptyMessage } = STYLES[cartStyle];
    const { text, link } = BUTTON_OPTIONS[buttonOption];

    const renderCart = () => {
        return (
            <div className={grid}>
                <div className="cart-items">
                    {cart.map(item => <CartProduct key={item.product.id} item={item} dispatch={dispatch} cartStyle={cartStyle} />)}
                </div>

                <div className="cart-summary">
                    <div className={subtotal}>
                        <span>Subtotal</span>
                        <span>${formatMoney(cartValue)}</span>
                    </div>
                    <Link to={link} className="button button-black cart-button">{text}</Link>
                </div>
            </div>
        )
    }

    const emptyCartMessage = <p className={emptyMessage}>There are no items in your cart.</p>;

    return (!cart.length && cartStyle === 'small') ? emptyCartMessage : renderCart();
}

export default Cart;
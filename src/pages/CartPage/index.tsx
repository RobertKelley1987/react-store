import { useEffect } from 'react';
import Cart from '../../components/Cart';
import { CartItem, CartAction } from "../../types";
import './CartPage.css';

type CartPageProps = {
    cart: CartItem[],
    dispatch: React.Dispatch<CartAction>,
    setViewingCartPage: React.Dispatch<React.SetStateAction<boolean>>
}

const CartPage = ({ cart, dispatch, setViewingCartPage }: CartPageProps) => {  
    useEffect(() => {
        setViewingCartPage(true);

        return () => setViewingCartPage(false);
    }, [])
    
    const emptyCartMessage = <p>There are no items in your cart.</p> 
    
    const renderPage = () => {
        return (
            <main className="cart-page">
                <h1 className="cart-page-heading">Shopping Cart</h1>
                <Cart cart={cart} dispatch={dispatch} cartStyle='large'/>
            </main>
        )
    }

    return cart.length ? renderPage() : emptyCartMessage;
}

export default CartPage;
import { CartItem, CartAction } from "../types";

type CartProps = {
    cart: CartItem[],
    dispatch: React.Dispatch<CartAction>
}


const CartPage = ({ cart, dispatch }: CartProps) => {    
    return (
        <div className="cart-page">
            {cart.map(item => {
                return <div className="cart-item">{`${item.product.artist} ${item.product.productType}`}</div>
            })}
        </div>
    );
}

export default CartPage;
import Qty from '../../components/Qty';
import { CartItem, CartAction } from '../../types';
import './CartProduct.css';

type CartItemProps = {
    item: CartItem,
    dispatch: React.Dispatch<CartAction>,
}

const CartProduct = ({ item, dispatch }: CartItemProps) => {
    const increment = () => {
        ++item.qty;
        dispatch({ type: 'UPDATE_QTY', payload: item })
    }

    const decrement = () => {
        if(item.qty === 1) {
            dispatch({ type: 'REMOVE_ITEM', payload: item })
        } else {
            --item.qty;
            dispatch({ type: 'UPDATE_QTY', payload: item })
        }
    }

    const calcSubtotal = () => {
        const subTotal = item.product.price * item.qty
        return Math.round(100 * subTotal) / 100;
    }

    return (
        <div className="cart-product">
            <img className="cart-product-img" src={`/imgs/${item.product.imgs[0]}.jpg`} />
            <div className="cart-product-text">
                <h2 className="cart-product-name">
                    {`${item.product.artist} "${item.product.desc}" ${item.product.productType}`}
                </h2>
                {item.size && <span className="cart-product-size">Size: {item.size.toUpperCase()}</span>}
                <span className="cart-product-price">${item.product.price}</span>
                <div>
                    <Qty size="small" qty={item.qty} inc={increment} dec={decrement} />
                </div>
                <span className="cart-product-total">
                    <span className="cart-product-total-label">Total: </span>
                    ${calcSubtotal()}
                </span>
            </div>
        </div>
    );
}

export default CartProduct;
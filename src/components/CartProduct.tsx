import Qty from './Qty';
import { MAX_ORDER_QTY } from '../constants';
import { CartItem, CartAction } from '../types';
import './CartProduct.css';

type CartProductProps = {
    item: CartItem,
    dispatch: React.Dispatch<CartAction>,
    cartStyle: 'small' | 'medium' | 'large'
}

const STYLES = {
    'small': {
        name: 'cart-product-name cart-product-name-small',
        closeButton: 'cart-product-close-button cart-product-close-button-small',
        price: 'cart-product-price-small',
        total: 'cart-product-total-small',
        textWrapper: 'cart-product-text cart-product-text-small'
    },
    'medium': {
        name: 'cart-product-name',
        closeButton: 'cart-product-close-button',
        price: 'cart-product-price',
        total: 'cart-product-total',
        textWrapper: 'cart-product-text'
    },
    'large': {
        name: 'cart-product-name',
        closeButton: 'cart-product-close-button',
        price: 'cart-product-price',
        total: 'cart-product-total',
        textWrapper: 'cart-product-text'
    }
}

const CartProduct = ({ item, dispatch, cartStyle }: CartProductProps) => {
    const increment = () => {
        item.qty < MAX_ORDER_QTY && ++item.qty;
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
        return (Math.round(100 * subTotal) / 100).toFixed(2);
    }

    // If this is the small dropdown cart, append clothing size to product desc
    const renderProductDesc = () => {
        let productDesc = `${item.product.artist} "${item.product.desc}" ${item.product.productType}`;
        if(cartStyle === 'small' && item.size) {
            productDesc += `  - ${item.size}`;
        }
        return productDesc;
    }

    const renderItemSize = () => {
        if(item.size && cartStyle !== 'small') {
            return <span className="cart-product-size">Size: {item.size.toUpperCase()}</span>;
        }
    }

    const renderSubtotal = () => {
        if(cartStyle !== 'small') {
            return (
                <span className={STYLES[cartStyle].total}>
                    <span className="cart-product-total-label">Total: </span>
                    ${calcSubtotal()}
                </span>
            )                     
        }
    }

    return (
        <div className="cart-product">
            <img className="cart-product-img" src={`/imgs/${item.product.imgs[0]}.jpg`} />
                <div className={STYLES[cartStyle].textWrapper}>
                    <div className="cart-product-name-wrapper">
                        <h2 className={STYLES[cartStyle].name}>{renderProductDesc()}</h2>
                        <button 
                            className={STYLES[cartStyle].closeButton} 
                            data-text="Remove"
                            onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}
                        >
                            <span className="material-symbols-outlined cart-product-close-icon">close</span>
                        </button>
                    </div>
                    {renderItemSize()}
                    <span className={STYLES[cartStyle].price}>${item.product.price}</span>
                    <div>
                        <Qty size='small' qty={item.qty} inc={increment} dec={decrement} />
                    </div>
                    {renderSubtotal()}
                </div>
        </div>
    );
}

export default CartProduct;
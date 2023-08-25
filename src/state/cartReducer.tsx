import { CartItem, CartAction } from '../types';
  
const cartReducer = (state: CartItem[], action: CartAction) => {
    const { type, payload } = action;

    const itemsAreEqual = (item: CartItem, anotherItem: CartItem) => {
        return item.product.id === anotherItem.product.id && item.size === anotherItem.size;
    }

    switch(type) {
        case 'ADD_ITEM':
            // Do not add clothing items with no size provided
            if(payload.product.category === 'apparel' && !payload.size) return state;

            // If items are found in cart, increment by qty provided, otherwise add new item to cart.
            const foundItemIndex = state.findIndex(item => itemsAreEqual(item, payload));
            if(foundItemIndex !== -1) {
                state[foundItemIndex].qty += payload.qty;
                return state;
            } else {
                return [...state, payload];
            }
        default:
            return state;
    }
}

export default cartReducer;
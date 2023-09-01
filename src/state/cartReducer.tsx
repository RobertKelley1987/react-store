import { CartItem, CartAction } from '../types';
  
const cartReducer = (state: CartItem[], action: CartAction) => {
    const { type, payload } = action;

    const itemsAreEqual = (item: CartItem, anotherItem: CartItem) => {
        return item.product.id === anotherItem.product.id && item.size === anotherItem.size;
    }

    const foundItemIndex = state.findIndex(item => itemsAreEqual(item, payload));

    switch(type) {
        case 'ADD_ITEM':
            // Do not add clothing items with no size provided
            if(payload.product.category === 'Apparel' && !payload.size) return state;

            // If items are found in cart, increment by qty provided, otherwise add new item to cart.
            if(foundItemIndex !== -1) {
                state[foundItemIndex].qty += payload.qty;
                return state;
            } else {
                return [...state, payload];
            }
        case 'UPDATE_QTY':
            // Do nothing if item is not found
            if(foundItemIndex === -1) return state;

            // Update qty of found item in state
            state[foundItemIndex].qty = payload.qty;
            return [...state];
        case 'REMOVE_ITEM':
            // Do nothing if item is not found
            if(foundItemIndex === -1) return state;

            // Filter item from cart
            const cartWithoutItem = state.filter(item => !itemsAreEqual(item, payload));
            return [...cartWithoutItem];
        default:
            return state;
    }
}

export default cartReducer;
import { ApparelCartItem, ApparelCartAction } from '../types';
  
const apparelReducer = (state: ApparelCartItem[], action: ApparelCartAction) => {
    const { type, payload } = action;

    const apparelEquals = (apparel: ApparelCartItem, anotherApparel: ApparelCartItem) => {
        return (apparel.product.id === anotherApparel.product.id) && (apparel.size === anotherApparel.size);
    }

    switch(type) {
        case 'ADD_APPAREL':
            const foundItemIndex = state.findIndex(item => apparelEquals(item, payload));
            if(foundItemIndex === -1) {
                return [...state, payload];
            } else {
                state[foundItemIndex].qty += payload.qty;
                return state;
            }
        default:
            return state;
    }
}

export default apparelReducer;
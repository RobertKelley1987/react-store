import { MusicCartItem, MusicCartAction } from '../types';
  
const albumReducer = (state: MusicCartItem[], action: MusicCartAction) => {
    const { type, payload } = action;

    const albumEquals = (album: MusicCartItem, anotherAlbum: MusicCartItem) => {
        return album.product.id === anotherAlbum.product.id;
    }

    switch(type) {
        case 'ADD_ALBUM':
            const foundItemIndex = state.findIndex(item => albumEquals(item, payload));
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

export default albumReducer;
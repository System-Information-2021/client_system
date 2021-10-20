import { ADD_TO_CART, REMOVE_TO_CART, UPDATE_TO_CART, SHOW_ITEM_CART } from "./shopping.types";

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id
        }
    }
}

export const removeToCart = (id) => {
    return {
        type: REMOVE_TO_CART,
        payload: {
            id
        }
    }
}

export const updateToCart = (id, value) => {
    return {
        type: UPDATE_TO_CART,
        payload: {
            id,
            qty: value
        }
    }
}
export const showItemCart = () => {
    return {
        type: SHOW_ITEM_CART
    }
}
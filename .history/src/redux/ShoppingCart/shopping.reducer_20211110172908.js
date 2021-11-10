import { ADD_TO_CART, UPDATE_TO_CART, REMOVE_FROM_CART, PRODUCT_SUCCESS, PRODUCT_ERROR, PAGE_PRODUCT } from "./shopping.types"
const INITIAL_STATE = {
    products: [],
    cart: [],
    currentItem: null,
    productError: null,
    totalPageProduct: 0
}

const shoppingReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            // Great Item data from products array
            const item = state.products.find(
                (product) => product.id === payload.id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item.id === payload.id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload.id)
            }
        case UPDATE_TO_CART:
            return {
                ...state,
                cart: state.cart.map(item => item.id === payload.id ? { ...item, qty: +payload.qty } : item)
            }

        // product
        case PRODUCT_SUCCESS:
            state.products = payload
            state.productError = null
            return { ...state }

        case PRODUCT_ERROR:
            state.products = []
            state.productError = payload
            return { ...state }

        case PAGE_PRODUCT:
            state.totalPageProduct = payload

            return { ...state }
        default:
            return state
    }
}

export default shoppingReducer
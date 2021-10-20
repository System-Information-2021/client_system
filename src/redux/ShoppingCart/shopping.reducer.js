import { ADD_TO_CART, SHOW_ITEM_CART, UPDATE_TO_CART, REMOVE_FROM_CART } from "./shopping.types"
const INITIAL_STATE = {
    products: [
        {
            id: 1,
            name: "xxx",
            price: 15.0
        },
        {
            id: 2,
            name: "xxx",
            price: 16.0
        },
        {
            id: 3,
            name: "xxx",
            price: 17.0
        }
    ],
    cart: [],
    currentItem: null,
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
        default:
            return state
    }
}

export default shoppingReducer
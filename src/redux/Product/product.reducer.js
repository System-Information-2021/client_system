import { PRODUCT_SUCCESS, PRODUCT_ERROR, PAGE_PRODUCT } from "./product.types"
const INITIAL_STATE = {
    listProducts: [],
    productError: null,
    totalPageProduct: 0
}

const productReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case PRODUCT_SUCCESS:
            state.listProducts = payload
            state.productError = null
            return { ...state }

        case PRODUCT_ERROR:
            state.listProducts = []
            state.productError = payload
            return { ...state }

        case PAGE_PRODUCT:
            state.totalPageProduct = payload
            return { ...state }

        default:
            return state
    }
}

export default productReducer
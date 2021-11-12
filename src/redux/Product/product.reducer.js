import { PRODUCT_SUCCESS, PRODUCT_ERROR, PAGE_PRODUCT, BRAND_ERROR, BRAND_SUCCESS, CATEGORY_ERROR, CATEGORY_SUCCESS } from "./product.types"
const INITIAL_STATE = {
    listProducts: [],
    listBrands: [],
    listCategorys: [],
    productError: null,
    searchError: null,
    brandError: null,
    categoryError: null,
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

        case BRAND_SUCCESS:
            state.listBrands = payload
            state.brandError = null
            return { ...state }

        case BRAND_ERROR:
            state.brandError = payload
            return { ...state }

        case CATEGORY_SUCCESS:
            state.listCategorys = payload
            state.categoryError = null
            return { ...state }

        case CATEGORY_ERROR:
            state.categoryError = payload
            return { ...state }

        default:
            return state
    }
}

export default productReducer
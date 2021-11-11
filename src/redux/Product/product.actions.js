import { PRODUCT_SUCCESS, PRODUCT_ERROR, PAGE_PRODUCT, BRAND_ERROR, BRAND_SUCCESS, CATEGORY_SUCCESS, CATEGORY_ERROR, SEARCH_SUCCESS, SEARCH_ERROR } from "./product.types"
import apiInstance from "../../services/index"

export const actFetchProduct = (page, brand, category, gender) => {
    return async (dispatch) => {
        try {
            const { data } = await apiInstance({
                url: "/customer/product/",
                method: "GET",
                params: {
                    page: page,
                    categoryId: category,
                    gender: gender,
                    brandId: brand
                }
            })
            console.log(data.data)
            if (data.code === 200) {
                dispatch(fetchProductSuccess(data.data))
                dispatch(fetchPageProduct(data.totalPage))
            } else {
                dispatch(fetchProductError(false))
            }

        } catch (err) {
            let error = err;
            if (typeof err.error_code === "undefined") {
                error = {
                    error_code: 999,
                    message: "Something went wrong, please try again later",
                };
            }
            dispatch(fetchProductError(false))
        }
    }
}

export const actFetchBrand = () => {
    return async (dispatch) => {
        try {
            const { data } = await apiInstance({
                url: "/customer/brand",
                method: "GET"
            })
            if (data.code === 200) {
                dispatch(fetchBrandSuccess(data.data))
            } else {
                dispatch(fetchBrandError(data.message))
            }
        } catch (err) {
            let error = err;
            if (typeof err.error_code === "undefined") {
                error = {
                    error_code: 999,
                    message: "Something went wrong, please try again later",
                };
                dispatch(fetchBrandError(error))
            }
        }
    }
}

export const actFetchCategory = () => {
    return async (dispatch) => {
        try {
            const { data } = await apiInstance({
                url: "/customer/category",
                method: "GET"
            })
            if (data.code === 200) {
                dispatch(fetchCategorySuccess(data.data))
            } else {
                dispatch(fetchCategoryError(data.message))
            }
        } catch (err) {
            let error = err;
            if (typeof err.error_code === "undefined") {
                error = {
                    error_code: 999,
                    message: "Something went wrong, please try again later",
                };
                dispatch(fetchCategoryError(error))
            }
        }
    }
}

export const fetchSearch = (key) => {
    return async (dispatch) => {
        try {
            const { data } = await apiInstance({
                url: "/customer/product/search",
                method: "GET",
                params: {
                    key: key,
                    page: 1,
                }
            })
            console.log(data)
            if (data.code === 200) {
                dispatch(fetchSearch(data.data))
            } else {
                dispatch(fetchSearchError(data.message))
            }
        } catch (err) {
            let error = err;
            if (typeof err.error_code === "undefined") {
                error = {
                    error_code: 999,
                    message: "Something went wrong, please try again later",
                };
                dispatch(fetchSearchError(error))
            }
        }
    }
}


export const fetchProductSuccess = (payload) => {
    return {
        type: PRODUCT_SUCCESS,
        payload
    }
}

export const fetchProductError = (payload) => {
    return {
        type: PRODUCT_ERROR,
        payload
    }
}
export const fetchPageProduct = (payload) => {
    return {
        type: PAGE_PRODUCT,
        payload
    }
}

export const fetchBrandSuccess = (payload) => {
    return {
        type: BRAND_SUCCESS,
        payload
    }
}

export const fetchBrandError = (payload) => {
    return {
        type: BRAND_ERROR,
        payload
    }
}

export const fetchCategorySuccess = (payload) => {
    return {
        type: CATEGORY_SUCCESS,
        payload
    }
}

export const fetchCategoryError = (payload) => {
    return {
        type: CATEGORY_ERROR,
        payload
    }
}

export const fetchSearchResult = (payload) => {
    return {
        type: SEARCH_SUCCESS,
        payload
    }
}

export const fetchSearchError = (payload) => {
    return {
        type: SEARCH_ERROR,
        payload
    }
}
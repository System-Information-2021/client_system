import { PRODUCT_SUCCESS, PRODUCT_ERROR, PAGE_PRODUCT } from "./product.types"
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

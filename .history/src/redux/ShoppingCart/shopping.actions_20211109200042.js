import Swal from "sweetalert2";
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_TO_CART, SHOW_ITEM_CART, PRODUCT_SUCCESS, PRODUCT_ERROR, PAGE_PRODUCT } from "./shopping.types";
import apiInstance from "../../services";

export const actFetchProduct = (page) => {
    return async (dispatch) => {
        try {
            const { data } = await apiInstance({
                url: "/customer/product/",
                method: "GET",
                params: {
                    page: 1,
                    gender: "men"
                }
            })
            console.log(data)
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
        type: REMOVE_FROM_CART,
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
// product

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

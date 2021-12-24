
export const PORDUCTS_LIST = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_LIST",
        })
    }
} 



export const ADD_PRODUCTS = (products) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_PRODUCTS",
            payload: products
        })
    }
} 

export const ADD_PRODUCT_DETAILS = (details) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_PRODUCT_DETAILS",
            payload: details
        })
    }
} 

export const PRODUCT_DETAILS = () => {
    return (dispatch) => {
        dispatch({
            type: "PRODUCT_DETAILS",
        })
    }
} 





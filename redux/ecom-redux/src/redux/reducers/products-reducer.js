const initialState = {
    products: [],
    productDetails: {}
}


const productsReducer = (state = initialState, action) => {

    if (action.type === "PORDUCTS_LIST") {
        return state.products;
    } else if (action.type === "ADD_PRODUCTS") {
        return {
            ...state,
            products: [...state.products, action.payload]
        }
    } else if (action.type === "ADD_PRODUCT_DETAILS") {

        return  {
            ...state,
            products: [...state.productDetails, action.payload]
        }
        

    } else if (action.type === "PRODUCT_DETAILS") {

        return state.productDetails;

    }
    else {
        return state;
    }

}



export default productsReducer;
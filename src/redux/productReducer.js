const initialState = {
    products: [],
    totalItem: 0,
    totalPrice: 0,
};

const productReducer = (state = initialState, action) => {
    let product;
    let index;
    switch (action.type) {
        case "ADD_PRODUCT":
            product = action.product;
            product.qty = 1;
            const Find = state.products?.find(f => f.id === product.id);
            if (!Find) {
                if (state.products) {
                    return {
                        products: [...state.products, product],
                        totalItem: state.totalItem + 1,
                        totalPrice: state.totalPrice + product.price,
                    };
                } else {
                    return {
                        products: [product],
                        totalItem: 1,
                        totalPrice: product.price,
                    };
                }
            }
            return { ...state };
        case "INCREMENT":
            index = state.products.findIndex(f => f.id === action.id);
            state.products[index].qty += 1;
            state.totalPrice += state.products[index].price;
            return {
                ...state,
            };
        case "DECREMENT":
            index = state.products.findIndex(f => f.id === action.id);
            if (state.products[index].qty > 1) {
                state.products[index].qty -= 1;
                state.totalPrice -= state.products[index].price;
                return {
                    ...state,
                };
            }
            state.totalPrice -= state.products[index].price;
            state.totalItem -= 1;
            state.products = state.products.filter(f => f.id !== action.id);
            return {
                ...state,
            };
        case "CLEAR_ALL":
            state.products = [];
            state.totalItem = 0;
            state.totalPrice = 0;
            return {
                ...state,
            };

        default:
            return { ...state };
    }
};

export default productReducer;

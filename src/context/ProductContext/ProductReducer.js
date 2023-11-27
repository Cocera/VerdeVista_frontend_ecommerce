const products = (state, action) => {
    switch (key) {

        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };

        default:
            return state;
    }
};

export default products;
import { createContext, useReducer } from "react";


export const CartContext = createContext({
    cart: {},
    dispatchCart: ({ type, payload }) => null
});

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                [action.payload]: state[action.payload] >= 0 ? state[action.payload] + 1 : 1
            }

        case 'SUBSTRACT':
            return {
                ...state,
                [action.payload]: state[action.payload] > 0 ? state[action.payload] - 1 : 0
            }

        case 'CLEAR':
            return {}

        default:
            return state;
    }
}

function CartProvider({ children }) {

    const [cart, dispatchCart] = useReducer(cartReducer, {})

    return (
        <CartContext.Provider value={{ cart, dispatchCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;

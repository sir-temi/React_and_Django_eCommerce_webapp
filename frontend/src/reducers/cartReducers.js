import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;
			const exitItem = state.cartItems.find(
				(x) => x.product === item.product
			);
			// return { loading: true, products: [] };
			if (exitItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x) =>
						x.product === exitItem.product ? item : x
					),
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item],
				};
			}

		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(x) => x.product !== action.payload
				),
			};
		default:
			return state;
	}
};

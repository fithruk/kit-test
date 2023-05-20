import { ProductProps } from '../../Product/Product.props';
import {
  ADD_PRODUCT_TO_BASKET,
  SET_INCREMENT,
  SET_DECREMENT,
  REMOVE_PRODUCT,
  SET_PRODUCTS_FROM_LAST_SESSION,
} from '../actions/cartActions';
export interface CartItemsProps extends ProductProps {
  count: number;
}

interface CartStateProps {
  cartItems: CartItemsProps[];
}

const initialState: CartStateProps = {
  cartItems: [],
};

type CartActionType =
  | {
      type: 'ADD_PRODUCT_TO_BASKET';
      payload: CartItemsProps;
    }
  | {
      type: 'SET_INCREMENT';
      payload: CartItemsProps[];
    }
  | {
      type: 'SET_DECREMENT';
      payload: CartItemsProps[];
    }
  | {
      type: 'REMOVE_PRODUCT';
      payload: CartItemsProps[];
    }
  | {
      type: 'SET_PRODUCTS_FROM_LAST_SESSION';
      payload: CartItemsProps[];
    };

const cartReducer = (state = initialState, action: CartActionType) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload),
      };
    case SET_INCREMENT:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case SET_DECREMENT:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    case SET_PRODUCTS_FROM_LAST_SESSION:
      return {
        ...state,
        cartItems: [...action.payload],
      };
    default:
      return state;
  }
};

export { cartReducer };

import { combineReducers, applyMiddleware, createStore } from 'redux';
import { productsReducer } from './reducers/productsReducer';
import thunk from 'redux-thunk';
import { ProductProps } from '../Product/Product.props';
import { CartItemsProps, cartReducer } from './reducers/cartReducer';

export interface RootState {
  products: { productsArr: ProductProps[] };
  cart: { cartItems: CartItemsProps[] };
}

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

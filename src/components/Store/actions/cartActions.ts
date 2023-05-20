import { AnyAction, Dispatch } from 'redux';
import { RootState } from '../store';
import { setUserCardToStorage } from '../../Storage/localStorage';
import { CartItemsProps } from '../reducers/cartReducer';

// Действия (actions)
const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';
const SET_INCREMENT = 'SET_INCREMENT';
const SET_DECREMENT = 'SET_DECREMENT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const SET_PRODUCTS_FROM_LAST_SESSION = 'SET_PRODUCTS_FROM_LAST_SESSION';

// Добавление продукта в корзину
const addProduct = (id: number): any => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    const currentState = getState();
    const { productsArr } = currentState.products;
    const { cartItems } = currentState.cart;
    const isAlreadyAdded = cartItems.find(item => item.id === id);

    if (isAlreadyAdded) {
      return;
    } else {
      const pickedProduct = productsArr.find(item => item.id === id);

      dispatch({
        type: ADD_PRODUCT_TO_BASKET,
        payload: { ...pickedProduct, count: 1 },
      });

      const state = getState();
      setUserCardToStorage(state.cart.cartItems);
    }
  };
};

// Увеличение количества продукта в корзине на 1
const addOne = (id: number): any => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    const currentState = getState();
    const { cartItems } = currentState.cart;
    const ind = cartItems.findIndex(item => item.id === id);
    const newCartItems = cartItems.slice();
    newCartItems[ind].count++;

    dispatch({
      type: SET_INCREMENT,
      payload: newCartItems,
    });

    setUserCardToStorage(newCartItems);
  };
};

// Уменьшение количества продукта в корзине на 1
const minusOne = (id: number): any => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    const currentState = getState();
    const { cartItems } = currentState.cart;
    const ind = cartItems.findIndex(item => item.id === id);
    const newCartItems = cartItems.slice();
    newCartItems[ind].count--;

    dispatch({
      type: SET_DECREMENT,
      payload: [...cartItems],
    });

    setUserCardToStorage(newCartItems);
  };
};

// Удаление продукта из корзины
const removeProduct = (id: number): any => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    const currentState = getState();
    const { cartItems } = currentState.cart;
    const newCartItems = [...cartItems.filter(item => item.id !== id)];

    dispatch({
      type: REMOVE_PRODUCT,
      payload: newCartItems,
    });

    setUserCardToStorage(newCartItems);
  };
};

// Установка корзины из localStorage
const setCartFromStorage = (arr: CartItemsProps[]) => {
  return {
    type: SET_PRODUCTS_FROM_LAST_SESSION,
    payload: arr,
  };
};

export {
  ADD_PRODUCT_TO_BASKET,
  SET_INCREMENT,
  SET_DECREMENT,
  REMOVE_PRODUCT,
  SET_PRODUCTS_FROM_LAST_SESSION,
  addProduct,
  addOne,
  minusOne,
  removeProduct,
  setCartFromStorage,
};

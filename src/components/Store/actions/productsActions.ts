import { AnyAction, Dispatch } from 'redux';
import { getAllProducts } from '../../ApiService/ApiService';
import { ProductProps } from '../../Product/Product.props';

// Действия (actions)
const SET_PRODUCTS = 'SET_PRODUCTS';
const LOAD_PRODUCTS = 'LOAD_PRODUCTS';

// Установка продуктов в стейт
const setProducts = (payload: ProductProps[]) => {
  return {
    type: SET_PRODUCTS,
    payload,
  };
};

// Загрузка продуктов
const loadProducts = (): any => {
  return async function (dispatch: Dispatch<AnyAction>) {
    const res = await getAllProducts();
    dispatch(setProducts(res));
  };
};

export { SET_PRODUCTS, LOAD_PRODUCTS, loadProducts };

import { ProductProps } from '../../Product/Product.props';
import { SET_PRODUCTS } from '../actions/productsActions';

interface StateProps {
  productsArr: ProductProps[];
}

const initialState: StateProps = {
  productsArr: [],
};

type ActionProps = { type: 'SET_PRODUCTS'; payload: ProductProps[] };

const productsReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productsArr: (state.productsArr = action.payload),
      };
    default:
      return state;
  }
};

export { productsReducer };

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  loadCartRequest: null,
  loadCartSuccess: ['data'],
  loadCartFailure: null,
  addProduct: ['item'],
  removeProduct: ['id'],
  setAmount: ['id', 'amount'],
});

export const CartTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  data: [],
});

/* Reducers */
const setAmount = (state, { id, amount }) => {
  const data = state.data.map(item => (item.id === id ? item.merge({ amount }) : item));

  return state.merge({
    data,
  });
};

const addProduct = (state, { item }) => {
  const { data } = state;

  const alreadyExists = data.find(onCart => onCart.id === item.id);

  if (alreadyExists) {
    return setAmount(state, { id: alreadyExists.id, amount: Number(alreadyExists.amount) + 1 });
  }

  const newItem = Object.assign({ amount: 1 }, item);

  return state.merge({ data: [...state.data, newItem] });
};

const removeProduct = (state, { id }) => state.merge({
  data: state.data.filter(item => item.id !== id),
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_PRODUCT]: addProduct,
  [Types.REMOVE_PRODUCT]: removeProduct,
  [Types.SET_AMOUNT]: setAmount,
});

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  loadProductsRequest: ['idCategory'],
  loadProductsSuccess: ['data'],
  loadProductsFailure: null,
});

export const ProductsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

/* Reducers */
export const loadRequest = state => state.merge({ loading: true });
export const loadSuccess = (state, { data }) => state.merge({ data, loading: false });
export const loadFailure = state => state.merge({ loading: false });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCTS_REQUEST]: loadRequest,
  [Types.LOAD_PRODUCTS_SUCCESS]: loadSuccess,
  [Types.LOAD_PRODUCTS_FAILURE]: loadFailure,
});

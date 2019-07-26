import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */
const { Types, Creators } = createActions({
  loadCategoriesRequest: null,
  loadCategoriesSuccess: ['data'],
  loadCategoriesFailure: null,
  setSelectedCategory: ['id'],
});

export const CategoriesTypes = Types;
export default Creators;

/* Initial State */
export const INITIAL_STATE = Immutable({
  data: [],
  selected: null,
  loading: false,
});

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_CATEGORIES_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_CATEGORIES_SUCCESS]: (state, { data }) => state.merge({ data, loading: false }),
  [Types.LOAD_CATEGORIES_FAILURE]: state => state.merge({ loading: false }),
  [Types.SET_SELECTED_CATEGORY]: (state, { id }) => state.merge({ selected: id }),
});

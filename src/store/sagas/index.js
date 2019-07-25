import { all, takeLatest } from 'redux-saga/effects';
import { CategoriesTypes } from '~/store/ducks/categories';
import { load } from './categories';

export default function* rootSaga() {
  yield all([takeLatest(CategoriesTypes.LOAD_CATEGORIES_REQUEST, load)]);
}

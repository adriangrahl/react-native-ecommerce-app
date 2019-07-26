import { all, takeLatest } from 'redux-saga/effects';
import { CategoriesTypes } from '~/store/ducks/categories';
import { load as loadCategories, setSelectedCategory } from './categories';
import { ProductsTypes } from '~/store/ducks/products';
import { load as loadProducts } from './products';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoriesTypes.LOAD_CATEGORIES_REQUEST, loadCategories),
    takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProducts),
    takeLatest(CategoriesTypes.SET_SELECTED_CATEGORY, setSelectedCategory),
  ]);
}

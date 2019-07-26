import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';
import ProductsActions from '~/store/ducks/products';

export function* load() {
  try {
    const { data } = yield call(api.get, '/categories/');

    yield put(CategoriesActions.loadCategoriesSuccess(data));

    if (data && data.length) yield put(CategoriesActions.setSelectedCategory(data[0].id));
  } catch (err) {
    yield put(CategoriesActions.loadCategoriesFailure());
  }
}

export function* setSelectedCategory({ id }) {
  if (id) yield put(ProductsActions.loadProductsRequest(id));
}

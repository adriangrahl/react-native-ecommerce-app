import { call, put } from 'redux-saga/effects';
import api from '~/services/api';

import CategoriesActions from '~/store/ducks/categories';

export function* load() {
  try {
    const { data } = yield call(api.get, '/categories/');

    yield put(CategoriesActions.loadCategoriesSuccess(data));
  } catch (err) {
    yield put(CategoriesActions.loadCategoriesFailure());
  }
}

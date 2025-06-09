import { all } from 'redux-saga/effects';

import { watchFetchMovies } from '../features/movies/moviesSaga';

export default function* rootSaga() {
  yield all([
    watchFetchMovies(), // ✅ now properly referenced
  ]);
}

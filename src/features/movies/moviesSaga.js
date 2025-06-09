import { call, put, takeLatest } from 'redux-saga/effects';
import { get } from '../../api/api';
import { setMovies, setError, setLoading } from './moviesSlice';

function* fetchMoviesSaga() {
  try {
    yield put(setLoading(true));
    const response = yield call(get, '/movies/paginated'); // Base URL + this path
    yield put(setMovies(response.data));
  } catch (error) {
    yield put(setError(error.message));
  } finally {
    yield put(setLoading(false));
  }
}

export function* watchFetchMovies() {
  yield takeLatest('movies/fetchMovies', fetchMoviesSaga);
}

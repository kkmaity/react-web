import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './moviesSlice';
import Loader from '../../components/Loader';

const MovieList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2>Movies</h2>

      {/* Show loader while fetching */}
      {loading && <Loader />}

      {/* Show error if any */}
      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {/* Show list only if not loading and no error */}
      {!loading && !error && (
        <ul className="list-group mt-3">
          {
            
            
          data.map((movie) => (
            
            <li key={movie.id} className="list-group-item">
              <strong>{movie.original_title}</strong>
              <div style={{ fontSize: '0.9rem', color: '#555' }}>
                {movie.overview?.slice(0, 120)}...
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieList;

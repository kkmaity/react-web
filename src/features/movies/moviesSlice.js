// src/features/movies/moviesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // Action just to trigger the saga
    fetchMovies: (state) => {
      // no state changes here
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      
    },
    setMovies: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { fetchMovies, setLoading, setMovies, setError } = moviesSlice.actions;

export default moviesSlice.reducer;

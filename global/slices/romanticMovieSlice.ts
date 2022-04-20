import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import requests from '../../utils/requests'

export const fetchRomanceMovies = createAsyncThunk(
  'netflix/fetchRomanceMovies',
  async () => {
    const response = await fetch(requests.fetchRomanceMovies)
    const data = await response.json()
    return data.results
  }
)

const romanticMovieSlice = createSlice({
  name: 'netflixMovies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRomanceMovies.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchRomanceMovies.fulfilled, (state, action) => {
      state.movies = action.payload
      state.loading = false
    })
    builder.addCase(fetchRomanceMovies.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export default romanticMovieSlice.reducer

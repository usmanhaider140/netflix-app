import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import requests from '../../utils/requests'

export const fetchActionMovies = createAsyncThunk(
  'netflix/fetchActionMovies',
  async () => {
    const response = await fetch(requests.fetchActionMovies)
    const data = await response.json()
    return data.results
  }
)

const actionMovieSlice = createSlice({
  name: 'netflixMovies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchActionMovies.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchActionMovies.fulfilled, (state, action) => {
      state.movies = action.payload
      state.loading = false
    })
    builder.addCase(fetchActionMovies.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export default actionMovieSlice.reducer

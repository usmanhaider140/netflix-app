import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import requests from '../../utils/requests'

export const fetchTrending = createAsyncThunk(
  'netflix/fetchTrending',
  async () => {
    const response = await fetch(requests.fetchTrending)
    const data = await response.json()
    return data.results
  }
)

const trendingMovieSlice = createSlice({
  name: 'netflixMovies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTrending.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      state.movies = action.payload
      state.loading = false
    })
    builder.addCase(fetchTrending.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export default trendingMovieSlice.reducer

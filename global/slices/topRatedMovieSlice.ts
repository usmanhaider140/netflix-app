import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import requests from '../../utils/requests'

export const fetchTopRated = createAsyncThunk(
  'netflix/fetchTopRated',
  async () => {
    const response = await fetch(requests.fetchTopRated)
    const data = await response.json()
    return data.results
  }
)

const topRatedMovieSlice = createSlice({
  name: 'netflixMovies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTopRated.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchTopRated.fulfilled, (state, action) => {
      state.movies = action.payload
      state.loading = false
    })
    builder.addCase(fetchTopRated.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export default topRatedMovieSlice.reducer

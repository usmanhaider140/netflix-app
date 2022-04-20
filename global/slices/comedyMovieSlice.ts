import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import requests from '../../utils/requests'

export const fetchComedyMovies = createAsyncThunk(
  'netflix/fetchComedyMovies',
  async () => {
    const response = await fetch(requests.fetchComedyMovies)
    const data = await response.json()
    return data.results
  }
)

const comedyMovieSlice = createSlice({
  name: 'netflixMovies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComedyMovies.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchComedyMovies.fulfilled, (state, action) => {
      state.movies = action.payload
      state.loading = false
    })
    builder.addCase(fetchComedyMovies.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export default comedyMovieSlice.reducer

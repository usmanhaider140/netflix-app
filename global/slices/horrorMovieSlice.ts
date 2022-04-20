import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import requests from '../../utils/requests'

export const fetchHorrorMovies = createAsyncThunk(
  'netflix/fetchHorrorMovies',
  async () => {
    const response = await fetch(requests.fetchHorrorMovies)
    const data = await response.json()
    return data.results
  }
)

const horrorMovieSlice = createSlice({
  name: 'netflixMovies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHorrorMovies.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchHorrorMovies.fulfilled, (state, action) => {
      state.movies = action.payload
      state.loading = false
    })
    builder.addCase(fetchHorrorMovies.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export default horrorMovieSlice.reducer

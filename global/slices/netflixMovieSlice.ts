import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import requests from '../../utils/requests'

export const fetchNetflixOriginals = createAsyncThunk(
  'netflix/fetchNetflixOriginals',
  async () => {
    const response = await fetch(requests.fetchNetflixOriginals)
    const data = await response.json()
    return data.results
  }
)

const netflixMovieSlice = createSlice({
  name: 'netflixMovies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNetflixOriginals.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchNetflixOriginals.fulfilled, (state, action) => {
      state.movies = action.payload
      state.loading = false
    })
    builder.addCase(fetchNetflixOriginals.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export default netflixMovieSlice.reducer

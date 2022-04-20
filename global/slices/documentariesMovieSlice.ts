import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import requests from '../../utils/requests'

export const fetchDocumentaries = createAsyncThunk(
  'netflix/fetchDocumentaries',
  async () => {
    const response = await fetch(requests.fetchDocumentaries)
    const data = await response.json()
    return data.results
  }
)

const documentariesMovieSlice = createSlice({
  name: 'netflixMovies',
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDocumentaries.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchDocumentaries.fulfilled, (state, action) => {
      state.movies = action.payload
      state.loading = false
    })
    builder.addCase(fetchDocumentaries.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export default documentariesMovieSlice.reducer

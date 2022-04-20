const { configureStore } = require('@reduxjs/toolkit')
import { useDispatch } from 'react-redux'
import actionMovieReducer from './slices/actionMovieSlice'
import comedyMovieReducer from './slices/comedyMovieSlice'
import documentariesMovieReducer from './slices/documentariesMovieSlice'
import horrorMovieReducer from './slices/horrorMovieSlice'
import netflixMovieReducer from './slices/netflixMovieSlice'
import romanticMovieReducer from './slices/romanticMovieSlice'
import topRatedMovieReducer from './slices/topRatedMovieSlice'
import trendingMovieReducer from './slices/trendingMovieSlice'

const store = configureStore({
  reducer: {
    netflixOriginals: netflixMovieReducer,
    topTrending: trendingMovieReducer,
    topRated: topRatedMovieReducer,
    comedy: comedyMovieReducer,
    romantic: romanticMovieReducer,
    horror: horrorMovieReducer,
    action: actionMovieReducer,
    documentary: documentariesMovieReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store

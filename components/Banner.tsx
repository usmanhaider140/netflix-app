import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { fetchNetflixOriginals } from '../global/slices/netflixMovieSlice'
import { useAppDispatch } from '../global/store'
import { Movie } from '../types'
import { base_url } from '../utils/constants'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/solid'

const Banner = () => {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useAppDispatch()
  const fetchMovies = async () => {
    try {
      setLoading(true)
      const res = await dispatch(fetchNetflixOriginals())
      const movies = res.payload
      setMovie(movies[Math.floor(Math.random() * movies.length)])
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div className="flex flex-col justify-start space-y-2 px-6 py-16 lg:h-[65vh] lg:justify-end lg:pb-12 ">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        {!loading && (
          <Image
            layout="fill"
            objectFit="cover"
            src={`${base_url}${movie?.backdrop_path || movie?.poster_path}`}
          />
        )}
      </div>
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-xl lg:text-2xl">
        {movie?.overview.slice(0, 200) + '...'}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button className="bannerButton bg-[gray]/70 ">
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  )
}

export default Banner

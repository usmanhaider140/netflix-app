import Image from 'next/image'
import React from 'react'
import { Movie } from '../types'
import { base_url } from '../utils/constants'

const Thumbnail = ({ movie }: { movie: Movie }) => {
  return (
    <div className="group relative h-24 min-w-[180px] cursor-pointer transition  duration-200 md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        layout="fill"
        src={'https://image.tmdb.org/t/p/w500' + movie?.poster_path}
        alt={movie?.name}
        className="rounded object-cover md:rounded"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black p-1 text-xs text-white opacity-0 transition-all duration-200 ease-out group-hover:opacity-75 md:p-2 md:text-sm">
        {movie?.name || movie?.title}
      </div>
    </div>
  )
}

export default Thumbnail

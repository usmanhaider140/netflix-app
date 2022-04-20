import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React, { useRef, useState } from 'react'
import { Movie } from '../types'
import Thumbnail from './Thumbnail'

const Row = ({ title, movies }: { title: string; movies: Movie[] }) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const [isMoved, setIsMoved] = useState(false)
  const handleClick = (value: string) => {
    setIsMoved(true)
    if (rowRef.current) {
      if (value === 'left') {
        rowRef.current.scrollTo({
          behavior: 'smooth',
          left: rowRef.current.scrollLeft - 300,
        })
      }
      if (value === 'right') {
        rowRef.current.scrollTo({
          behavior: 'smooth',
          left: rowRef.current.scrollLeft + 300,
        })
      }
    }
  }
  return (
    <div className="h-50 space-y-0.5 md:ml-6 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative">
        <ChevronLeftIcon
          className={`absolute  top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
        />
        <div
          ref={rowRef}
          className="flex items-center space-x-1 overflow-x-scroll transition-all duration-300 scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie?.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 opacity-0  transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row

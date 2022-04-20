import React, { Profiler, useEffect, useState } from 'react'
import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header className={`${isScrolled && 'bg-red-50 bg-opacity-10'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">Tv Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My Favorite</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline " />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6  " />
        <Link href="/account">
          <div className="w-fit items-center rounded-full  bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
            <EmojiHappyIcon className="h-6 w-6" />
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header

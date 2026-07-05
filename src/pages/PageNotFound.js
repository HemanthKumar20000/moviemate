import React from 'react'
import Page from '../assets/OIP.webp'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
 
  return (
    <div className="dark:text-white">
      <section className="flex flex-col items-center">
        <img
          src={Page}
          className="rounded w-full max-w-lg"
          alt="Page not found"
        />

        <Link to="/"  className="mt-6 bg-blue-500 text-white px-6 py-2 rounded">
          Back to Home
        
        </Link>
      </section>
    </div>
  )
}

export default PageNotFound
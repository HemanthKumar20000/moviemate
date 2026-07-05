import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const footer = () => {
  return (
   
      

    <footer className="bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4 dark:bg-slate-900 dark:text-white">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-body sm:text-center">© 2023 <Link to="" className="hover:underline">Moviemate</Link>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
            <li>
                <Link to="#" className="hover:underline me-4 md:me-6">About</Link>
            </li>
            <li>
                <Link to="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
            </li>
            <li>
                <Link to="#" className="hover:underline me-4 md:me-6">Licensing</Link>
            </li>
            <li>
                <Link to="#" className="hover:underline">Contact</Link>
            </li>
        </ul>
        </div>
    </footer>

  )
}

export default footer

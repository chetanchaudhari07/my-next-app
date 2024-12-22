import React from 'react'



export function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="" className="flex items-center mb-4 sm:mb-0">
            <img src="/pngwing.com.png" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pokemon
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="https://github.com/chetanchaudhari07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chetan-chaudhari-97740021b/"
              target="_blank"
              rel="noopener noreferrer"
               className="hover:underline me-4 md:me-6">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://chetanchaudhari07.github.io/portfolio.github.io/"
              target="_blank"
              rel="noopener noreferrer"
               className="hover:underline me-4 md:me-6">
                Portfolio
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1nIihUuUf3RYMccafVseq_QcrUOU2_ldR/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
               className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{' '}
          <a href="" className="hover:underline">
            Pokemon™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
    )
}



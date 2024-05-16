import React from 'react'

function Search({ input, handleChange }) {
  return (
    <>
     <form className="p-12">
      <div className="relative w-full">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos, Design Templates..."
          name="search"
          required
          onChange={handleChange}
          value={input}
        />
      </div>
    </form>
    </>
  )
}

export default Search
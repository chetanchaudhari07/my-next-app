'use client';

import { usePokedexContext } from '@/components/context/PokedexContext'

export function SearchBar() {
    const { query, setQuery } = usePokedexContext();
  
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Searching for:', query);
    };
  
    return (
      <form onSubmit={handleSearch} className="relative w-full max-w-md">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Pokemon..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          🔍
        </button>
      </form>
    );
  }
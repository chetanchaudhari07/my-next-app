'use client';

import React, { createContext, useContext, useState } from 'react';

interface PokedexContextProps {
  query: string;
  setQuery: (query: string) => void;
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const PokedexContext = createContext<PokedexContextProps | undefined>(undefined);

export function PokedexProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('id');

  return (
    <PokedexContext.Provider
      value={{ query, setQuery, selectedTypes, setSelectedTypes, currentPage, setCurrentPage, sortBy, setSortBy }}
    >
      {children}
    </PokedexContext.Provider>
  );
}

export function usePokedexContext() {
  const context = useContext(PokedexContext);
  if (!context) throw new Error('usePokedexContext must be used within PokedexProvider');
  return context;
}

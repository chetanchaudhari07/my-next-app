'use client';

import React from 'react';
import { usePokedexContext } from '@/components/context/PokedexContext';
import { PokemonCard } from '@/components/pokemon/PokemonCard';

interface Pokemon {
  id: number;
  name: string;
  types: string[];
  sprite: string;
}

export function PokedexGrid({ pokemonList }: { pokemonList: Pokemon[] }) {
  const { query, selectedTypes, sortBy, currentPage } = usePokedexContext();

  const filteredPokemon = pokemonList
    .filter((pokemon) => pokemon.name.toLowerCase().includes(query.toLowerCase()))
    .filter((pokemon) =>
      selectedTypes.length > 0 ? selectedTypes.every((type) => pokemon.types.includes(type)) : true
    )
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'id') return a.id - b.id;
      return 0;
    });

  const itemsPerPage = 10;
  const paginatedPokemon = filteredPokemon.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {paginatedPokemon.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}

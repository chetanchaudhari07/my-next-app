'use client';

import { useState } from 'react';
import { PokemonTypeFilter } from '@/components/pokemon/PokemonTypeFilter';
import { PokedexGrid } from '@/components/pokemonBox/pokemonBox';

const samplePokemonList = [
    { id: 1, name: 'Bulbasaur', types: ['grass', 'poison'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { id: 4, name: 'Charmander', types: ['fire'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { id: 7, name: 'Squirtle', types: ['water'], sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    
];

const availableTypes = ['fire', 'water', 'grass', 'electric', 'rock', 'ghost', 'fairy', 'bug', 'flying', 'poison'];

export default function CategoryPage() {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  
    const handleTypeToggle = (type: string) => {
      setSelectedTypes((prevTypes) =>
        prevTypes.includes(type) ? prevTypes.filter((t) => t !== type) : [...prevTypes, type]
      );
    };
  
    const filteredPokemonList = selectedTypes.length
      ? samplePokemonList.filter((pokemon) =>
          selectedTypes.every((type) => pokemon.types.includes(type))
        )
      : samplePokemonList;
  
    return (
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Categories</h1>
        <PokemonTypeFilter availableTypes={availableTypes} onTypeToggle={handleTypeToggle} selectedTypes={selectedTypes} />
        <PokedexGrid pokemonList={filteredPokemonList} />
      </main>
    );
  }
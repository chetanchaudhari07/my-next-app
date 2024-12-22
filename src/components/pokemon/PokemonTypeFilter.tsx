import React from 'react';

interface PokemonTypeFilterProps {
  availableTypes: string[];
  selectedTypes: string[];
  onTypeToggle: (type: string) => void;
}

export function PokemonTypeFilter({ availableTypes, selectedTypes, onTypeToggle }: PokemonTypeFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 my-4">
      {availableTypes.map((type) => (
        <button
          key={type}
          onClick={() => onTypeToggle(type)}
          className={`px-3 py-1 rounded-full ${
            selectedTypes.includes(type) ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {type}
        </button>
      ))}
    </div>
  );
}

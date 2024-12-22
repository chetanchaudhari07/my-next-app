'use client';

import { PokemonHeader } from './PokemonHeader';
import { PokemonImage } from './PokemonImage';
import { PokemonType } from './PokemonType';
import type { PokemonCardProps } from './types/PokemonTypes';

export function PokemonCard({ id, name, types, sprite }: PokemonCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-4">
        <PokemonImage name={name} sprite={sprite} />
        <div className="space-y-2">
          <PokemonHeader name={name} id={id} />
          <div className="flex gap-2">
            {types.map((type) => (
              <PokemonType key={type} type={type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
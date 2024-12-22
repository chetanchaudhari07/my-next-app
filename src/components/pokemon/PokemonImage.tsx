'use client';

import Image from 'next/image';

interface PokemonImageProps {
  name: string;
  sprite: string;
}

export function PokemonImage({ name, sprite }: PokemonImageProps) {
  return (
    <div className="relative w-full aspect-square mb-4">
      <Image
        src={sprite}
        alt={`${name} sprite`}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
}
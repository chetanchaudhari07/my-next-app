interface TypeProps {
    type: string;
  }
  
  const typeColors: Record<string, string> = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-500',
    grass: 'bg-green-500',
    electric: 'bg-yellow-400',
    ice: 'bg-blue-200',
    fighting: 'bg-red-700',
    poison: 'bg-purple-500',
    ground: 'bg-yellow-600',
    flying: 'bg-indigo-400',
    psychic: 'bg-pink-500',
    bug: 'bg-lime-500',
    rock: 'bg-yellow-800',
    ghost: 'bg-purple-700',
    dragon: 'bg-indigo-700',
    dark: 'bg-gray-800',
    steel: 'bg-gray-500',
    fairy: 'bg-pink-300',
  };
  
  export function PokemonType({ type }: TypeProps) {
    const backgroundColor = typeColors[type.toLowerCase()] || 'bg-gray-400';
    
    return (
      <span className={`${backgroundColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
        {type}
      </span>
    );
  }
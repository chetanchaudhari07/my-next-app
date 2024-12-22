interface PokemonHeaderProps {
    name: string;
    id: number;
  }
  
  export function PokemonHeader({ name, id }: PokemonHeaderProps) {
    return (
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold capitalize">{name}</h2>
        <span className="text-gray-500 text-sm">#{id.toString().padStart(3, '0')}</span>
      </div>
    );
  }
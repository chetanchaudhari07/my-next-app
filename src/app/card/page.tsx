import { PokemonCard } from '@/components/pokemon/PokemonCard';



interface PokemonTypeInfo {
  type: {
    name: string;
  };
}

async function fetchPokemonData() {
  const pokemonCount = 10; 
  const pokemonList = await Promise.all(
    Array.from({ length: pokemonCount }, async (_, index) => {
      const id = index + 1; 
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();

      return {
        id: data.id,
        name: data.name,
        types: data.types.map((typeInfo: PokemonTypeInfo) => typeInfo.type.name),
        sprite: data.sprites.front_default,
      };
    })
  );
  return pokemonList;
}



export default async function CardPage() {
  const pokemonList = await fetchPokemonData();

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Pokemon Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
    </main>
  );
}
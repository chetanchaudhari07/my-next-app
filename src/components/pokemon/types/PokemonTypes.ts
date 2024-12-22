export interface PokemonCardProps {
    id: number;
    name: string;
    types: string[];
    sprite: string;
}

export interface PokemonTypeFilterProps {
    availableTypes: string[];
    selectedTypes: string[];
    onTypeSelect: (types: string[]) => void;
}

import { PokemonSpecies } from "./pokemon-species";

export class ChainLink {

    evolves_to: ChainLink[];
    species: PokemonSpecies[]
}

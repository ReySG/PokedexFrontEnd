import { EvolutionChain } from "./evolution-chain";
import { FlavorText } from "./flavor-text";

export class PokemonSpecies {
    id: number;
    name: string;
    url: string;
    gender_rate: number;
    evolution_chain: EvolutionChain;
    flavor_text_entries: FlavorText[];

}

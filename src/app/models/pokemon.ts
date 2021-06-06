import { EvolutionChain } from "./evolution-chain";
import { FlavorText } from "./flavor-text";
import { PokemonSpecies } from "./pokemon-species";
import { Sprites } from "./pokemon-sprites";
import { PokemonType } from "./pokemon-type";

export class Pokemon {
  id: number;
  name: string;
  weight: number;
  sprites: Sprites;
  types: PokemonType[];
  abilities: Ability[];
  species: PokemonSpecies;
  evolution_chain: EvolutionChain;
  flavor_text_entries: FlavorText[]
  
}

class Ability  {
  ability: {
      name: string;
  }

  constructor() {

  }
}



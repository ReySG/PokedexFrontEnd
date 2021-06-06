import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from './pokemon.service';
import { forkJoin, Observable } from 'rxjs';
import { ModalService } from '../pokemon-info/modal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonSpecies } from '../models/pokemon-species';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];

  page = 1;
  totalPokemons: number;
  pokemonSelected: Pokemon;
  speciesSelected: PokemonSpecies[];
  species: PokemonSpecies[];

  constructor(private PokemonService: PokemonService, public modalService: ModalService, private router: Router,private activatedRoute: ActivatedRoute) {
    
  }
 
  ngOnInit(): void {
    this.getPokemons();
  

  
  }

  getPokemons() {
    this.PokemonService.getPokemons(10, this.page + 0)
    .subscribe((response: any) => {
      this.totalPokemons = response.count;
      response.results.forEach(result => {
        this.PokemonService.getPokemonData(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            this.pokemons.sort((a,b) => a.id - b.id)

           
          })
          
    
      })


    
    })
  }

 

  openModal(pokemon: Pokemon) {
  
    this.pokemonSelected = pokemon;
    this.pokemonSelected.id = pokemon.id

    this.modalService.openModal();
   
    console.log(this.pokemonSelected);
 
  }

 
  
}

